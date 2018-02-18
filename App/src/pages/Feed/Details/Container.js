// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Header, Content } from 'components';

// Assets
import styles from './styles';

const Details = () => (
  <Page>
    <Header title='FeedDetails' />
    <Content style={styles.content}>
      <Text upper bold phrase='HOME.INCREMENT' />
    </Content>
  </Page>
);

Details.propTypes = {};

export default Details;
