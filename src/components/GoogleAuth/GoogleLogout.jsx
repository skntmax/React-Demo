import React from 'react';
import {GoogleLogout}  from 'react-google-login'  
   
 export default function GglLogout() {
    
     const onSuccessLogout = (response) => {
        console.log( "succesffully logout ", response.profileObj);
      }
 
     return (
    <div>
    <GoogleLogout
    clientId="698613129858-j586ntno7lvfd8b2mb7uvfv3089ghbtm.apps.googleusercontent.com"
    buttonText="Logout"
    onSuccess={onSuccessLogout}
    cookiePolicy={'single_host_origin'}    
     />

    </div>
  );
}
