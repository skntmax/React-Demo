import React from 'react'
import Main from './component/Main';
import Todo from './component/Todo';
import Clock from './component/Clock'
 
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
   
import Home from './component/Home';
import Index from './store/Index';
import Callback from './component/Callback';
import HOC_comp from './component/HOC_comp';

export default  createBrowserRouter([
  {
    path: "/",
    element:  <Home /> ,
  },
  {
    path: "/todo",
    element:  <Todo />,
  },{
    path: "/calc",
    element:  <Clock />,  
  },
  {
    path: "/counter",
    element:  <Index />,  
  }, 
   
  {
    path: "/callback",
    element:  <Callback />,  
  }, 
  {
    path: "/hoc",
    element:  <HOC_comp />,  
  },
]); 

export const allRoutes = [
     '/' , 'todo' ,'calc' ,"counter" ,"callback" , "hoc"
]