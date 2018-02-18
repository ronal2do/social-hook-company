// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Page, Text, Header, Content, Button } from 'components';

// Assets
import styles from './styles';

const List = ({ navigateTo }) => (
  <Page>
    <Header title='FEED.LIST.TITLE' />
    <Content style={styles.content}>
      <Button onPress={() => navigateTo('FeedNew')}>
        <Text upper bold>Feed New</Text>
      </Button>
      <Button onPress={() => navigateTo('FeedEdit')}>
        <Text upper bold>Feed Edit</Text>
      </Button>
      <Button onPress={() => navigateTo('FeedDetails')}>
        <Text upper bold>Feed Details</Text>
      </Button>
    </Content>
  </Page>
);

List.propTypes = {
  navigateTo: PropTypes.func.isRequired
};

export default List;
