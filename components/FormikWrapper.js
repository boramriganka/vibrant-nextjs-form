import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikController from "./FormikController.js"

function FormikWrapper() {
  const choices = [
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" },
  ]

  const initialValues = {
    email: "",
    description: "",
    selectChoice: "",
    radioChoice: "",
    checkBoxChoice: "",
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectChoice: Yup.string().required("Required"),
    radioChoice: Yup.string().required("Required"),
    checkBoxChoice: Yup.array().required("Required"),
  })
  const onSubmit = values => console.log("Form data", values)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
     
    >
      {formik => (
        <Form  className="form">
              <h1>Next.js Form</h1>
          <FormikController
          className="Input"
            control="input"
            type="email"
            label="Email"
            name="email"
            options={choices}
          />
          <FormikController
           className="Input"
            control="textarea"
            label="Description"
            name="description"
            options={choices}
          />
          <FormikController
           className="Input"
            control="select"
            label="Select your choice"
            name="selectChoice"
            options={choices}
          />
          <FormikController
           className="Input"
            control="radio"
            label="Click your choice"
            name="radioChoice"
            options={choices}
          />
          <FormikController
           className="Input"
            control="checkbox"
            label="select your choices"
            name="checkBoxChoice"
            options={choices}
          />
          <button type="submit" className="btn">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
export default FormikWrapper