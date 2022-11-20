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
    path: "/store",
    element:  <Index />,  
  }
]); 


export const allRoutes = [
     '/' , 'todo' ,'calc' ,"store"
]