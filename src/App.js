import logo from './logo.svg';
import { useEffect } from 'react';
import {
    RouterProvider,
  } from "react-router-dom";

import router from './Router'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store ,persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

   
  return (  
     <Provider store={store}>
     <PersistGate persistor={persistor}>
      
      <HelmetProvider>
      <div className="App" id="back" >
      <RouterProvider router={router} />
      </div>
     </HelmetProvider>
 
      </PersistGate>
      </Provider>
   
    
  );
}

export default App;
