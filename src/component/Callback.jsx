import React ,{useState} from 'react'
import { Helmet } from 'react-helmet-async'  

 
function Callback() {
     const [cnt , setCnt] = useState(0)
     const [usr , setUser] = useState("")
     
     const myCallBack = React.useCallback(()=>{
        random()
  } ,[usr] ) 
   
  const mymemo = React.useMemo(()=>{
    memoCallback()
} ,[usr] ) 



  
  return (
    <div>
       <Helmet >
        
       <meta name="title" content={"Digital card of " } />
       <meta name="description" content="Description for the react-helmet section" />
       <meta property="og:title" content={"Digital card of "}  />
       <meta property="og:image" content="http://m.digital-card.co.il/friedman/249/images/icon.png" />
       <meta property="og:description" content="Description for the react-helmet section" />
       <meta property="og:url" content={"https://bucard.co.il/digitalCard/"} />
        <meta name="title" content={"CALLBAC META "} />
         
        
        </Helmet> 
       {  myCallBack()  }
       {mymemo}
         {cnt}
      <button onClick={e=>setCnt(cnt+1)} > change </button>
      <input onChange={e=> setUser(e.target.value)} />
      </div>
  )
}

   function random() {
     console.log("use call back called ");
      
  }
 
  function memoCallback() {
    console.log("useMemo callback  ");  
  }


export default Callback