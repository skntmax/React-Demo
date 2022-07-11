import React from 'react';
import { Switch , Route } from 'react-router-dom';
import captcha from './components/captcha/captcha';
export default function PrivateRouter() {
  return (
    <div>
     <Switch>
      
        <Route  exact path="/captcha" component={captcha} />
        <Route  exact path="/test" component={captcha} />
     
      
      </Switch>
     
      
    </div>
  );
}
