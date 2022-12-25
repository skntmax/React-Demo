import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Blog from './Blog'
export default function UserBLog() {
  let navigate = useNavigate()
  
  useEffect(() => {
   if(localStorage.getItem('blog-user')==null){
    navigate('/blog')
   }

  }, [] )
    
    
    return (
    <div>
     
       <Blog />
        
      </div>
  )
}
