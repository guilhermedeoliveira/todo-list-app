/* eslint react/prop-types: 0 */

import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-native-elements';
import Input from '../../components/Input';

const FormikForm = ({
  values,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  errors,
  touched,
  isValid,
  isSubmitting
}) => (
  <React.Fragment>
    <Input
      name="email"
      label="E-mail"
      autoCapitalize="none"
      value={values.email}
      onChange={setFieldValue}
      onTouch={setFieldTouched}
      error={touched.email && errors.email}
    />
    <Input
      name="password"
      label="Senha"
      autoCapitalize="none"
      secureTextEntry
      value={values.password}
      onChange={setFieldValue}
      onTouch={setFieldTouched}
      error={touched.password && errors.password}
    />
    <Button
      backgroundColor="blue"
      buttonStyle={{ marginTop: 20, width: '100%' }}
      title="ENTER"
      onPress={handleSubmit}
      disabled={!isValid || isSubmitting}
      loading={isSubmitting}
    />
  </React.Fragment>
);

const LoginForm = withFormik({
  mapPropsToValues: ({ email, password }) => ({
    email: email || '',
    password: password || ''
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('E-mail não válido').required('E-mail é obrigatório'),
    password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória')
  }),

  handleSubmit: async (values, {
    setErrors, setSubmitting,
    props: { onSubmitForm }
  }) => {
    try {
      await onSubmitForm(values);

      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      setErrors(error);
    }

    setSubmitting(false);
  }
})(FormikForm);

export default LoginForm;
