// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Le nom est obligatoire'),
  email: yup
    .string()
    .required('Email est obligatoire')
    .email('Email non valide obligatoire')
    .test('checkUniqueEmail', 'Email deja utilise', async (email) => {
      let isUnique = false;
      try {
        isUnique = await emailAsyncValidation(email);
      } catch (err) {
        console.error(err);
      }
      return isUnique;
    }),
  password: yup.string().required('Le mot de passe est obligatoire').min(8),
});

const formSubmission = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('User register!');
    }, 2000);
  });
};

const emailAsyncValidation = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'ghislain@email.fr') {
        reject(false);
      } else {
        resolve(true);
      }
    }, 2000);
  });
};

const BasicFormik = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  async function onSubmit(formValues, onsSubmittingProps) {
    try {
      const response = await formSubmission(formValues);
      onsSubmittingProps.resetForm();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <label htmlFor="name">Nom</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="name">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BasicFormik;
