// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Content, Button } from 'components';

// Assets
import styles from './styles';

const Login = ({ navigateTo }) => (
  <Page>
    <Content style={styles.content}>
      <Button onPress={() => navigateTo('FeedList')}>
        <Text phrase='LOGIN.LOGIN' />
      </Button>
      <Button onPress={() => navigateTo('Register')}>
        <Text phrase='LOGIN.REGISTER' />
      </Button>
    </Content>
  </Page>
);

Login.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default Login;
