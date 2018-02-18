// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Content, Button, Form, TextField, SubmitButton } from 'components';

// Services
import { required, email } from 'services';

// Assets
import styles from './styles';

import { featureName } from './';

const Login = ({ navigateTo }) => (
  <Page>
    <Content style={styles.content}>
      <Text style={styles.appname} phrase='APP_NAME' />
      <Form name={featureName} onSubmit={() => navigateTo('FeedList')}>
        <TextField
          light
          style={styles.textField}
          label='FORM.EMAIL.LABEL'
          placeholder='FORM.EMAIL.PLACEHOLDER'
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
          light
          style={styles.textField}
          label='FORM.PASSWORD.LABEL'
          placeholder='FORM.PASSWORD.PLACEHOLDER'
          name='password'
          autoCorrect={false}
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          validations={[required('FORM.VALIDATIONS.PASSWORD.REQUIRED')]}
        />
        <SubmitButton primary form={featureName} style={styles.button}>
          <Text upper light bold phrase='LOGIN.LOGIN' />
        </SubmitButton>
      </Form>
      <Button style={styles.buttonRegister} onPress={() => navigateTo('Register')}>
        <Text light phrase='LOGIN.NO_ACCOUNT' />
        <Text light bold phrase='LOGIN.REGISTER' />
      </Button>
    </Content>
  </Page>
);

Login.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default Login;
