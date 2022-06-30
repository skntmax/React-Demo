import React, { Component } from 'react';
// import Input from '@mui/material/Input';
export default class FormEvents extends Component {
  render() {
    return (
      <div>
    
      <input 
       type="text" name="name" style={{border:"1px solid red" , borderRadius:"5px"}}  
       placeholder="Enter Name "
       onInput={ console.log (" input change called ")  }
       onFocus={console.log (" focused called ") }
       onBlur={console.log (" onBlur called  ") }
       onReset={console.log (" onReset called ")}        
       
        />
         
      </div>
    );
  }
}
