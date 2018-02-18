// Core
import React from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { View } from 'react-native';

// Assets
import styles from './styles';

const Content = ({ children, style, ...props }) => (
  <View style={[styles.container, style]} {...props}>{children}</View>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  style: View.propTypes.style
};

Content.defaultProps = {
  style: undefined
};

export default Content;
