import React,{ useContext  , useMemo ,useState ,useEffect} from 'react'
import  { UserContext }  from '../App'
 
export default function ComponentA() {
    const userName = useContext(UserContext);
    const  [imageURL,setImageURL] = useState(1)
    const userImage  = useMemo(() => {
        
        return (
             <React.Fragment>
             <UserContext.Consumer>        
      {
        ((res)=>{
            setImageURL(res)
          return (
               <h1>
                component A {res} 
                </h1>
             )
         })
      }  
       </UserContext.Consumer>
              </React.Fragment>
        )

    }, [imageURL])


 useEffect(() => {
      console.log(imageURL);
 }, [imageURL])
     
    return (
    <div>
     
            userName : {userName} <br></br>    
            imageURL : {imageURL} 

           {
            imageURL==1?userImage: ""
          }    
              
      
        
     </div>
  )
}
