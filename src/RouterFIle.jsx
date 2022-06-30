import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Captcha from './component/Captcha/Captcha';
import GoogleAuth from './component/GoogleAuth/GoogleAuth';

export default function RouterFIle() {
  return (
    <div> 
            {  
            <Routes>
             <Route exact={true}  path ="/googleAuth"  element={<GoogleAuth />} />
             <Route exact={true}  path ="/" element={<React.Fragment> home page  </React.Fragment>} />
             <Route exact={true}  path ="/captcha" element={<Captcha /> } />
             
              
             </Routes>  
              }
      
    </div>
  );
}
