// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Platform, Image } from 'react-native';
import { Button, Page, Text, Header, Content } from 'components';

// Assets
import logo from 'assets/img/logo.png';
import styles from './styles';

const instructions = Platform.select({
  ios: 'HOME.IOS_INSTRUCTIONS',
  android: 'HOME.ANDROID_INSTRUCTIONS'
});

const Home = ({ counter, increment, navigateTo }) => (
  <Page>
    <Header title='HOME.TITLE' />
    <Content style={styles.content}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome} phrase='HOME.WELCOME' />
      <Text style={styles.instructions} phrase='HOME.GET_STATED' />
      <Text style={styles.instructions} phrase={instructions} />
      <Text style={styles.counter} phrase='HOME.COUNTER_VALUE' values={{ counter }} />
      <Button primary onPress={increment} style={styles.button}>
        <Text upper light bold phrase='HOME.INCREMENT' />
      </Button>
      <Button
        primary
        onPress={() => navigateTo('Form')}
        style={styles.button}
      >
        <Text upper light bold phrase='HOME.GO_TO_FORM' />
      </Button>
    </Content>
  </Page>
);

Home.propTypes = {
  increment: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  navigateTo: PropTypes.func.isRequired
};

export default Home;
