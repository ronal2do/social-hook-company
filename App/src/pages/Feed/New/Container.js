// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Header, Content } from 'components';

// Assets
import styles from './styles';

const New = () => (
  <Page>
    <Header title='FEED.NEW.TITLE' />
    <Content style={styles.content}>
      <Text>New Feed</Text>
    </Content>
  </Page>
);

New.propTypes = {};

export default New;
