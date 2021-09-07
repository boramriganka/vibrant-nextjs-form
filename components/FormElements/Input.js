import React from "react"
import { Field, ErrorMessage } from "formik"

function Input(props) {
  const { name, label, ...rest } = props
  return (
    <div className='form-group'>
      <label htmlFor={name}> {label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}
export default Input