// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Content, Button } from 'components';

// Assets
import styles from './styles';

const Register = ({ navigateTo }) => (
  <Page>
    <Content style={styles.content}>
      <Button onPress={() => navigateTo('FeedList')}>
        <Text upper phrase='REGISTER.SAVE' />
      </Button>
    </Content>
  </Page>
);

Register.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default Register;
