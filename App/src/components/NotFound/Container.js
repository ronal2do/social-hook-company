// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'components';

// Assets
import styles from './styles';

const NotFound = ({ phrase }) => (
  <View style={styles.container}>
    <Icon name='ion-ios-cafe-outline' size={120} style={styles.icon} />
    <Text phrase={phrase || 'NOT_FOUND'} style={styles.text} />
  </View>
);

NotFound.propTypes = {
  phrase: PropTypes.string
};

NotFound.defaultProps = {
  phrase: undefined
};

export default NotFound;
