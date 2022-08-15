import React from 'react';
import { Switch , Route } from 'react-router-dom';
import captcha from './components/captcha/captcha';
import Cart from './components/CartSystem/Cart';
import GooogleAuth from './components/GoogleAuth/GooogleAuth';
import Payslip from './components/payslip/Payslip';
export default function PrivateRouter() {
  return (
    <div>
     <Switch>
      
        <Route  exact path="/captcha" component={captcha} />
         <Route  exact path="/payslip" component={Payslip} /> 
         <Route  exact path="/googleAuth" component={GooogleAuth} /> 
         <Route  exact path="/cart" component={Cart} /> 
      
      </Switch>
    
    </div>
  );
}
