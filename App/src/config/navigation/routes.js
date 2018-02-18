// Core
import React from 'react';

// Presentational
import { Platform, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Route as WebRoute } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

// Pages
import Home from 'pages/Home';
import Form from 'pages/Form';

export const routes = {
  Home: '/',
  Form: '/form'
};

export const history = Platform.OS === 'web' ? createHistory() : undefined;

export const NativeRoutes = StackNavigator({
  Home: { screen: Home },
  Form: { screen: Form }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: false
  }
});

export const WebRoutes = () => (
  <ConnectedRouter history={history}>
    <View>
      <WebRoute exact path={routes.Home} component={Home} />
      <WebRoute path={routes.Form} component={Form} />
    </View>
  </ConnectedRouter>
);
