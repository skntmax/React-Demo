import Main from './component/Main';
import Todo from './component/Todo';
import Clock from './component/Clock'
 
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
   
import Home from './component/Home';

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
  }
]); 


export const allRoutes = [
     '/' , 'todo' ,'calc'
]