import React, { Component, Fragment } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import Yup from 'yup';
import { Input } from 'igravity-ui';

import Container from '../layout/Container';

class RecipeForm extends Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={{
            name: '',
            ingredients: [{ name: '', qty: '', measurement: '' }],
          }}
          validationSchema={() =>
            Yup.object().shape({
              name: Yup.string().required('Name is required'),
              // images: todo,
              ingredients: Yup.array().of(
                Yup.object().shape({
                  name: Yup.string().required(),
                  qty: Yup.string().required(),
                  measurement: Yup.string().required(),
                })
              ),
              directions: Yup.array().of(Yup.string()),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form style={{ maxWidth: '420px' }}>
              <Field id="name" name="name" label="Name" component={Input} />
              <FieldArray
                name="ingredients"
                render={props => (
                  <div>
                    <button
                      onClick={() =>
                        props.push({ name: '', qty: '', measurement: '' })
                      }
                    >
                      Test
                    </button>
                    {props.form.values.ingredients.map((ingredient, i) => (
                      <Fragment key={i}>
                        <Field
                          id={`ingredients.${i}.name`}
                          name={`ingredients.${i}.name`}
                          label="Name"
                          component={Input}
                        />
                        <Field
                          id={`ingredients.${i}.qty`}
                          name={`ingredients.${i}.qty`}
                          label="Qty"
                          component={Input}
                        />
                        <Field
                          id={`ingredients.${i}.measurement`}
                          name={`ingredients.${i}.measurement`}
                          label="Measurement"
                          component={Input}
                        />
                      </Fragment>
                    ))}
                  </div>
                )}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </Container>
    );
  }
}
export default RecipeForm;
