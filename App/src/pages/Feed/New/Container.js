// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Header, Content } from 'components';

// Assets
import styles from './styles';

const New = () => (
  <Page>
    <Header title='HOME.TITLE' />
    <Content style={styles.content}>
      <Text upper bold phrase='HOME.INCREMENT' />
    </Content>
  </Page>
);

New.propTypes = {};

export default New;
