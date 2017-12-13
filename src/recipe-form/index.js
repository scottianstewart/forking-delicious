import React, { Component } from 'react';
import { withFormik } from 'formik';

import Container from '../layout/Container';

class RecipeForm extends Component {
  render() {
    const{
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    } = this.props;

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {touched.name && errors.name && <div>{errors.name}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </Container>
    );

  }
}
export default withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ name: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name Required';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    console.log(values)
  },
})(RecipeForm);
