// Core
import React from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { View, Image, StatusBar } from 'react-native';

// Assets
import styles from './styles';

const Page = ({ background, children, style, statusBarStyle, ...props }) => (
  <View
    style={[
      styles.container,
      style,
      typeof background === 'string'
      && !/\.(jpg|jpeg|gif|png)$/.test(background)
      && { backgroundColor: background }
    ]}
    {...props}
  >
    <If
      condition={
        typeof background === 'number'
        || typeof background === 'object'
        || /\.(jpg|jpeg|gif|png)$/.test(background)
      }
    >
      <Image
        source={background}
        style={styles.backgroundImage}
      />
    </If>
    <View style={[styles.statusbar, statusBarStyle]}>
      <StatusBar barStyle='light-content' />
    </View>
    {children}
  </View>
);

Page.propTypes = {
  background: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string.isRequired
    }),
    PropTypes.number,
    PropTypes.string
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  style: View.propTypes.style,
  statusBarStyle: View.propTypes.style
};

Page.defaultProps = {
  background: undefined,
  style: undefined,
  statusBarStyle: undefined
};

export default Page;
