import React from 'react';
import { Switch , Route } from 'react-router-dom';
import captcha from './components/captcha/captcha';
import GooogleAuth from './components/GoogleAuth/GooogleAuth';
import Payslip from './components/payslip/Payslip';
export default function PrivateRouter() {
  return (
    <div>
     <Switch>
      
        <Route  exact path="/captcha" component={captcha} />
         <Route  exact path="/payslip" component={Payslip} /> 
         <Route  exact path="/googleAuth" component={GooogleAuth} /> 
      
      </Switch>
    
    </div>
  );
}
