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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'




function App() {
  const queryClient = new QueryClient()

  return (  
     
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
       <HelmetProvider>
       <div className="App" id="back" >
       <RouterProvider router={router} />
       </div>
     </HelmetProvider>
      </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
   
    
  );
}

export default App;
