import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Captcha,{CC} from './component/Captcha/Captcha';
import HomePage from './component/Demo/HomePage';
import GoogleAuth from './component/GoogleAuth/GoogleAuth';

export default function RouterFIle() {
  return (
    <div> 
            {  
            <Routes>
             <Route exact={true}  path ="/googleAuth"  element={<GoogleAuth />} />
             <Route exact={true}  path ="/" element={<React.Fragment> home page  </React.Fragment>} />
             <Route exact={true}  path ="/captcha" element={<Captcha /> } />
             <Route exact={true}  path ="/demo" element={<HomePage /> } />
             <Route exact={true}  path ="/cc1" element={<CC /> } />
             
              
             </Routes>  
              }
      
    </div>
  );
}
