import logo from './logo.svg';
import { useEffect } from 'react';
import {
    RouterProvider,
  } from "react-router-dom";

import router from './Router'
import { HelmetProvider } from 'react-helmet-async';

function App() {

  useEffect(()=>{
  // console.log(" parent component ");
  } )  
   


  return (  
    <HelmetProvider>
   <div className="App" id="back" >
   <RouterProvider router={router} />

    </div>

    </HelmetProvider>
    
  );
}

export default App;
