import React, { useState } from 'react'
import Navbar from './components/common/Navbar'
import Login from './Login'
import './assets/css/login.css'
import { Provider } from 'react-redux'
import store from '../src/Redux_store/store'
function App() {

   const [count, setCount] = useState(0)
      
  return (
     <React.Fragment>
      <Provider store={store} >
      
      <Navbar />
      <div className="login_page" >
      <Login />
      </div>
       
      </Provider>
    </React.Fragment>
 
    )
}

export default App
