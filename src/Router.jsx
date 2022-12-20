import React from 'react'
import Main from './component/Main';
import Todo from './component/Todo';
import Clock from './component/Clock'
import FileSystem from './component/FileSystem' 
import Test from './../src/Test'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Pagination from './Pagination/Pagination'   
import Home from './component/Home';
import Index from './store/Index';
import Callback from './component/Callback';
import HOC_comp from './component/HOC_comp';
import TodoRedux from './component/TodoRedux';
import Contacts from './component/Contacts';
import Blog from './Blog/Blog'; 

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
  {
    path: "/todo-redux",
    element:  <TodoRedux />,  
  },
  {
    path: "/contact",
    element:  <Contacts />,  
  },

  {
     path: "/redux-thunk-blog-list",
     element:  <Contacts />,  
  },

  {
    path: "/file-system",
    element:  <FileSystem />,  
  },

  {
    path: "/blog",
    element:  <Blog />,  
  },
  {
    path: "/pagination",
    element: <Pagination />   ,  
  },
   
  {
    path: "/hoc-class-component",
    element: <Test />   ,  
  },

   
]);
  

export const allRoutes = [
     '/' , 'todo' ,'calc' ,"counter" ,"callback" , "hoc" ,"todo-redux" ,"contact" , "redux-thunk-blog-list" ,
     "file-system"  ,"blog" ,"pagination" , "hoc-class-component"
     ]