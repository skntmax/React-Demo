import React , {useState , useEffect} from 'react';
import GoogleLogin from './GoogleLogin';
import GoogleLogout from './GoogleLogout';
import { gapi } from 'gapi-script';

 export default function GooogleAuth() {
    const [cID, setCid] = useState('698613129858-j586ntno7lvfd8b2mb7uvfv3089ghbtm.apps.googleusercontent.com');
    useEffect(() => {
      
          function start (){
             gapi.client.init({
                 clientId:cID,
                 scope:"" 
             })
          }
          gapi.load('client:auth2', start)
       
    });
  

     function getData(){
         
         

    }
      
  
    return (
    <div >
      
      <GoogleLogin/>  <br />
      <GoogleLogout />

    </div>
  );
}
