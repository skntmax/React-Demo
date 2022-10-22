import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Captcha from './components/captcha/Captcha';
import cartSystem from './components/cartSystem';
import Cart from './components/CartSystem/Cart';
import GooogleAuth from './components/GoogleAuth/GooogleAuth';
import Payslip from './components/payslip/Payslip';
import RazorPay from './components/razorpay/RazorPay';
import UseContext from './components/UseContext';
import PdfMaker from './PdfMaker';
import {

  Link
} from "react-router-dom";


export default function PrivateRouter() {



  return (
    <div>
       
     <Switch>    
      
         
         <Route  exact path="/captcha" component={Captcha} />
         <Route  exact path="/payslip" component={Payslip} /> 
         <Route  exact path="/googleAuth" component={GooogleAuth} /> 
         <Route  exact path="/cart" component={Cart} /> 
         <Route  exact path="/razorpay" component={RazorPay} />
         <Route  exact path="/useContext" component={UseContext} />
         <Route  exact path="/make-pdf" component={UseContext} />
         <Route  exact path="/cart-System" component={cartSystem} />
         <Route  exact path="/pdf" component={PdfMaker} />

         </Switch>
    </div>
    
  );
}
