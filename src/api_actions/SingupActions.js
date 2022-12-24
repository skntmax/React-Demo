import axios from "axios";

export const createUser = (model ,isAdmin ,setSignupUser)=>{
       
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
                               window.location.reload();
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


export  const userLogin = async (model,navigate)=>{
 debugger
   try{
   const {  email ,password  } = model

     if(isFormFilled(model)) { 
            let loginModel = {email:email.value , password:password.value}
             let result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login` , loginModel ) 
        const { data } = result 
        console.log(data);
         
               if(data.status==200) {
                   alert(data.message)  
                   localStorage.setItem('blog-user' , data.result.token  )
                   navigate('/blog')
                 }
               if(data.status==500) {
                   alert(data.message)
                   
               }  
                
       }  else{
          alert("credentials is missing ")
       }
  }catch(err){
      console.log("soome erro "  ,err );
  }
    
  }



 