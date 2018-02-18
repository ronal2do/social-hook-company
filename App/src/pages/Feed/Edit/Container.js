// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Header, Content } from 'components';

// Assets
import styles from './styles';

const Edit = () => (
  <Page>
    <Header title='FEED.EDIT.TITLE' />
    <Content style={styles.content}>
      <Text>Edit Feed</Text>
    </Content>
  </Page>
);

Edit.propTypes = {};

export default Edit;
