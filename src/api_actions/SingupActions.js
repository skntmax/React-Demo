import axios from "axios";

export const createUser = (model ,isAdmin ,setSignupUser,navigate)=>{
       
const { username , email ,password, adminPassword } = model

          let bodyModel =  {username:username.value , email:email.value ,password : password.value}
           if(isAdmin)bodyModel['adminPassword']=adminPassword.value 

           if(isFormFilled(bodyModel)) {
            setSignupUser(true)
                axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signup` , bodyModel ).then((res)=>{
                        let {data} = res
                        if(data.status==500) 
                               alert(data.message) ; setSignupUser(false)
                        if(data.status==200) {
                           setSignupUser(false)
                               alert(data.message)
                               navigate('/blog') 
                        }
                }).catch(err=>{
                   console.log(err);   
                })
            } else{
                 alert("fill complete form ")
            }
  }

 function isFormFilled(data){
  
    for(let val in data ) {
            if(data[val]=="")
                  return false   
       }
    return true 
  }


export  const userLogin = async (model,setLoggedIn ,navigate )=>{
 debugger
   try{
   const {  email ,password  } = model

     if(isFormFilled(model)) { 
            setLoggedIn(true)
            let loginModel = {email:email.value , password:password.value}
             let result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login` , loginModel ) 
        const { data } = result 
        console.log(data);
         
               if(data.status==200) {
                   localStorage.setItem('blog-user' , data.result.token  )
                   navigate(`/blog/${data.result.username}`)
                 }
               if(data.status==500) {
                   alert(data.message)
                   setLoggedIn(false)
               }  
                
       }  else{
          alert("credentials is missing ")
       }
  }catch(err){
      console.log("soome erro "  ,err );
  }
    
  }



 