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
            directions: [''],
          }}
          validationSchema={() =>
            Yup.object().shape({
              name: Yup.string().required('Name is required'),
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
                render={({ form, push }) => (
                  <div>
                    {form.values.ingredients.map((ingredient, i) => (
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
                    <button
                      onClick={() =>
                        push({ name: '', qty: '', measurement: '' })
                      }
                    >
                      Add another ingredient
                    </button>
                  </div>
                )}
              />
              <FieldArray
                name="directions"
                render={({ form, push }) => (
                  <div>
                    {form.values.directions.map((direction, i) => (
                      <Fragment key={i}>
                        <Field
                          id={`directions.${i}`}
                          name={`directions.${i}`}
                          label={`Step ${i + 1}`}
                          component={Input}
                        />
                      </Fragment>
                    ))}
                    <button onClick={() => push('')}>
                      Add another direction
                    </button>
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
