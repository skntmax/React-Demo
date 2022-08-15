import React ,{useState} from 'react';
import { GoogleLogin } from 'react-google-login';

 export default function GglLogin() {

      const [user, setUser] = useState({});

    const onSuccess = (response) => {
        console.log("logged in succesfull " , response.profileObj);
         setUser( response.profileObj)
 
     }


      const onFailure = (response) => {
        console.log("UserId or password incorrect ", response);
      }

    return (
    <div>

          {Object.keys(user).length!=0? <p> Name {user.name} </p> :" " }

        <GoogleLogin
        clientId="698613129858-j586ntno7lvfd8b2mb7uvfv3089ghbtm.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
             
       />
      
    </div>
  );
}
