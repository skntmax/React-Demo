import logo from './logo.svg';
import { useEffect } from 'react';
import {
    RouterProvider,
  } from "react-router-dom";

import router from './Router'

function App() {

  useEffect(()=>{
  // console.log(" parent component ");
  } )  
   


  return (  

   <div className="App" id="back" >
   <RouterProvider router={router} />

    </div>
      
  );
}

export default App;
