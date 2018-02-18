// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Platform } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { NativeRoutes, WebRoutes } from './routes';

const NativeNavigator = ({ dispatch, nav }) => (
  <NativeRoutes navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const WebNavigator = () => (
  <WebRoutes />
);

NativeNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array
  }).isRequired
};

export default Platform.OS !== 'web' ? NativeNavigator : WebNavigator;
