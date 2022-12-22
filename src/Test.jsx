import React, { Component } from 'react'
import BlogData from './BlogData'
import Blog from './redux-thunk/Blog'

export default class Test extends React.Component {
  render() {
    return (
      <div>

            <HOC  UserData={BlogData} color="red"   />  // higher order component 
            <HOC  UserData={BlogData} color="blue"   />  // higher order component 
            <HOC  UserData={BlogData} color="green"   />  // higher order component 
            <HOC  UserData={BlogData} color="#7F8014"   />  // higher order component 
            <HOC  UserData={BlogData} color="#262606"   />  // higher order component 
            <HOC  UserData={BlogData} color=" #7f8014"   />  // higher order component 
            <HOC  UserData={BlogData} color="#6fa8dc"   />  // higher order component 
            <HOC  UserData={BlogData} color="#6fa8dc"   />  // higher order component 
            <HOC  UserData={BlogData} color=" #7f8014"   />  // higher order component 

           class based component 
     
        </div>
    )
  }
}


const  HOC =(props)=> <props.UserData  bgColor={props.color}  />  