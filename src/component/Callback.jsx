import React ,{useState} from 'react'

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