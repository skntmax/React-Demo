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
import UserBLog from './Blog/UserBLog';
import Geolocation from './Geolocation';
import MyBlogs from './Blog/user_blogs/MyBlogs';
import constat from './constat';
import ShowBlogs from './Blog/user_blogs/ShowBlogs';
import ShowByTitle from './Blog/user_blogs/ShowByTitle';
import Auth from './Auth';
import Passport from './Passport';
import Pagination2 from './Pagination2';
import ReactQuery from './ReactQuery';
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
    path: "/blog/:username",
    element:  <UserBLog /> ,  
  },

  {
    path: constat.user_show,
    element:  <ShowBlogs /> ,  
  } ,

  {
    path: "/my-blogs/:username",
    element:  <MyBlogs /> ,  
  },

  {
    path: constat.show_by_title,
    element:  <ShowByTitle /> ,  
  },
   
  {
    path: "/pagination",
    element: <Pagination />   ,  
  },
   
  {
    path: "/hoc-class-component",
    element: <Test />   ,  
  },

  {
    path: "/geolocation",
    element: <Geolocation />  ,  
  },
   
  {
    path: "/oauth",
    element: <Auth />  ,  
  },

  {
    path: "/passport",
    element: <Passport />  ,  
  },

  {
    path: "/pagination2",
    element: <Pagination2 />  ,    
  } ,

  {
    path: "/react-query",
    element: <ReactQuery />  ,    
  }

   
   






   
]);
  

export const allRoutes = [
     '/' , 'todo' ,'calc' ,"counter" ,"callback" , "hoc" ,"todo-redux" ,"contact" , "redux-thunk-blog-list" ,
       "file-system"  , "blog" , "pagination" , "hoc-class-component" ,"geolocation" ,"oauth",   "passport" ,"pagination2" ,"react-query" ]