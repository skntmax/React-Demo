import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {ReactReduxContext, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'; 
import {increament,decrement} from './actions/index'
import { useDispatch } from 'react-redux';
import Dashoboard from './Dashoboard';
// import Test from './Test';
import Selectproduct from './Selectproduct';
import FormValidation from './FormValidation';
import Todo from './Todo';
import ImageUpload from './component/ImageUpload';
import CssPlaceholder from './component/cardHover/CssPlaceholder';
import Events from './component/Events';
  

function App() {
  const myState = useSelector((state)=>state.changeTheNumber )
   const dispatch = useDispatch()

    
    return ( 
      <React.Fragment>

     {/* <Dashoboard/> */}
     {   /* <Selectproduct /> */ }
          { /* <FormValidation />  */ }
           
        {    /* <Todo /> */   }
            
      { /* <ImageUpload />   */ }
    
   { /*  <CssPlaceholder />  */}

         <div className='mainData'>
           <Events  /> 
          </div>

         </React.Fragment>

    );
}

export default App;