import logo from './logo.svg';
import { useEffect } from 'react';
import {
    RouterProvider,
  } from "react-router-dom";

import router from './Router'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
function App() {

  useEffect(()=>{
  // console.log(" parent component "); 
 } )  
   
   
  return (  
     <Provider store={store}>
      <HelmetProvider>
      <div className="App" id="back" >
      <RouterProvider router={router} />
      </div>
    </HelmetProvider>
      </Provider>
   
    
  );
}

export default App;
