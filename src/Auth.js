import React ,{useState} from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google'; 
function Auth() {
   
  const [clientId, setClientId] = useState("127069964067-ecs561pfupvs2entdh3dj66uj4nvae44.apps.googleusercontent.com")  

  return (
    <React.Fragment>
     
     <div style={{
      display:"flex" ,
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
     }}>
     
      
    <GoogleOAuthProvider clientId={clientId} >

    <GoogleLogin
    onSuccess={(data) => {
      console.log(data);
    }}
     
    onError={() => {
      console.log('Login Failed');
    }}
    auto_select 
      // useOneTap   
    /> 
     
  </GoogleOAuthProvider>
  <button onClick={googleLogout}>  logout  </button>

  
     
     </div> 
      
     
    </React.Fragment>
  )
}

export default Auth
