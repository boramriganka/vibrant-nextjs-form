import React from "react"
import { Field, ErrorMessage } from "formik"

function TextArea(props) {
  const { label, name, ...rest } = props
  return (
    <div  className='form-group'>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}
export default TextArea