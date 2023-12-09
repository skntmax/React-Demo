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
    domain={process.env.REACT_APP_BASE_DOMAIN}
    clientId={process.env.REACT_APP_BASE_CLIENT_ID}
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

