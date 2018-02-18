// Core
import React from 'react';

// Presentational
import { Image } from 'react-native';
import { Page, Header, Form, TextField, SubmitButton, Text } from 'components';

// Services
import { required, email } from 'services';

// Assets
import logo from 'assets/img/logo.png';
import styles from './styles';

const Login = () => (
  <Page>
    <Header back title='FORM.TITLE' />
    <Image source={logo} style={styles.image} />
    <Form
      name='form'
      onSubmit={values => alert(JSON.stringify(values))}
      style={styles.form}
    >
      <TextField
        label='FORM.EMAIL'
        name='email'
        autoCorrect={false}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        validations={[
          required('FORM.VALIDATIONS.EMAIL.REQUIRED'),
          email('FORM.VALIDATIONS.EMAIL.FORMAT')
        ]}
      />
      <TextField
        password
        label='FORM.PASSWORD'
        name='password'
        autoCorrect={false}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        validations={[required('FORM.VALIDATIONS.PASSWORD.REQUIRED')]}
      />
      <SubmitButton primary block dark form='form' style={styles.button}>
        <Text upper light bold phrase='FORM.VALIDATE' />
      </SubmitButton>
    </Form>
  </Page>
);

export default Login;
