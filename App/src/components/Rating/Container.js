// Core
import React from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Assets
import styles from './styles';
import { colors, fonts } from 'assets/styles';

const Rating = ({ style, activeColor, disabledColor, rating, size }) => (
  <View style={[styles.container, style]}>
    <For each='star' index='index' of={[1, 2, 3, 4, 5]}>
      <Icon
        key={star}
        name='ios-star'
        color={(index + 1 <= Number(rating)) ? activeColor : disabledColor}
        size={size}
        style={styles.star}
      />
    </For>
  </View>
);

Rating.propTypes = {
  style: View.propTypes.style,
  activeColor: PropTypes.string,
  disabledColor: PropTypes.string,
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  size: PropTypes.number
};

Rating.defaultProps = {
  style: undefined,
  activeColor: colors.primary.base,
  disabledColor: colors.disabled,
  size: fonts.small
};

export default Rating;
