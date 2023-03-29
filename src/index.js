import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './Context/ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root") );

root.render(
    <React.Fragment>
    <Auth0Provider
    domain="dev-uq6v6xo4yxju6r3r.us.auth0.com"
    clientId="EyqOYUCjVeMRc5C8aa5IQouJqS29GanO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }} >
  
    <HelmetProvider>
     <ContextProvider>
       <App />    
    </ContextProvider> 
    </HelmetProvider>
   </Auth0Provider>

</React.Fragment>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
