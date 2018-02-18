// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Assets
import styles from './styles';

const items = [
  { index: 0, icon: 'ios-restaurant' },
  { index: 1, icon: 'ios-paper' },
  { index: 2, icon: 'ios-heart' },
  { index: 3, icon: 'ios-notifications' },
  { index: 4, icon: 'ios-contact' }
];

const Tabs = ({ navigationState, jumpToIndex }) => (
  <View style={styles.container}>
    <For each='item' of={items}>
      <TouchableOpacity
        key={item.index}
        activeOpacity={0.6}
        onPress={() => jumpToIndex(item.index)}
      >
        <Icon
          style={navigationState.index === item.index ? styles.activated : styles.disabled}
          name={item.icon}
          size={28}
        />
      </TouchableOpacity>
    </For>
  </View>
);

Tabs.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number.isRequired
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired
};

export default Tabs;
