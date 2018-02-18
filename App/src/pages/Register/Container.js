// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Content, Form, TextField, SubmitButton } from 'components';

// Services
import { required, email } from 'services';

// Assets
import styles from './styles';

import { featureName } from './';

const Register = ({ navigateTo }) => (
  <Page>
    <Content style={styles.content}>
      <Text style={styles.title} phrase='REGISTER.TITLE' />
      <Form name={featureName} onSubmit={() => navigateTo('FeedList')}>
        <TextField
          light
          style={styles.textField}
          label='FORM.GITHUB.LABEL'
          placeholder='FORM.GITHUB.PLACEHOLDER'
          name='github'
          autoCorrect={false}
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          validations={[required('FORM.VALIDATIONS.EMAIL.REQUIRED')]}
        />
        <TextField
          light
          style={styles.textField}
          label='FORM.NAME.LABEL'
          placeholder='FORM.NAME.PLACEHOLDER'
          name='name'
          autoCorrect={false}
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          validations={[required('FORM.VALIDATIONS.EMAIL.REQUIRED')]}
        />
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
          <Text upper light bold phrase='REGISTER.SAVE' />
        </SubmitButton>
      </Form>
    </Content>
  </Page>
);

Register.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default Register;
