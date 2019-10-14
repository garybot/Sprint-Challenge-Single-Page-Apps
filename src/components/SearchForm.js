import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SearchForm(props, {values}) {
  return (
    <Form className="search-form">
      <Field type="text" name="character" placeholder="Character" />
      <button type="submit">search</button>
      <button type="reset" onClick={() => {props.setCharacterToFind('')}}>reset</button>
    </Form>
  )
}

const FormikSearchForm = withFormik({
  mapPropsToValues({character}) {
    return {
      "character": character || ""
    }
  },
  validationSchema: Yup.object().shape({
    character: Yup.string()
    .required("Enter a characters name to search.")
  }),
  handleSubmit(values, {props, resetForm, setErrors, setSubmitting}) {
    props.setCharacterToFind(values.character);
    console.log(values.character);
    resetForm();
    setSubmitting(false);
  }
})(SearchForm)

export default FormikSearchForm;
