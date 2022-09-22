import React ,{useContext , useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../../firebase';
import firebase from 'firebase';
import { ContextApiReceiver } from '../../ContextProvider/ContextProvider';

 
 
export default function Captcha() {
  let receiver  = useContext( ContextApiReceiver )

  const [data, setData ] = useState( receiver )
   
    // const app = initializeApp(firebaseConfig);
    // console.log(" intialised app " , app);
    // var auth = firebase.auth();
    // var provider = new firebase.auth.GoogleAuthProvider(); 
    // const analytics = getAnalytics(app);
     
    React.useEffect(() => {

          console.log("data rcrdr " , data );
       
    }, [data])

    console.log("receiver" , receiver );
    
  return (   

    <div>
     
      Captcha comp {receiver.name} 
    
       </div>
  );
   
   
   
  
}