import React from 'react'
import { Field } from 'formik'
export default function Input(  { name , type, placeholder} ) {
  return (
       <React.Fragment>
      <Field name={name} type={type} placeholder={placeholder}  />
      </React.Fragment>
      )
}
