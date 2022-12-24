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