import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import Blog from './Blog'

export default function UserBLog() {
  let navigate = useNavigate()
  let params = useParams()
   const [image, setImage] = useState("")

   useEffect(async() => {
     if(localStorage.getItem('blog-user')==null){
     navigate('/blog')
   }

  setTimeout(()=>{
     setImage('https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg')
  } ,  1000 )


  }, [] )
    
    
    return (
    <div>
     
     <Helmet>
      
     <title>  {params.username+" dynamic name hai bhai "} </title>

      <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content={params.username+"context dunamic meta "}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={params.username+" dynamic name hai bhai "}  />
        <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
        <meta property="og:image" content={image} />

     </Helmet>
       <Blog />
        
      </div>
  )
}
