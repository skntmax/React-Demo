import React from 'react'

export default function Input(props) {
  return (
    <React.Fragment>
       
     
      <input type={props.type}
       name={props.name}
        onFocus={props.onFocus}
         onBlur={props.onBlur} 
         onChange={props.onChange}
         /> <br/><br/>
     </React.Fragment>
  )
}
