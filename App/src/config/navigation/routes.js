// Core
import React from 'react';

// Presentational
import { Platform, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Route as WebRoute } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

// Pages
import Login from 'pages/Login';
import Register from 'pages/Register';
import FeedNew from 'pages/Feed/New';
import FeedEdit from 'pages/Feed/Edit';
import FeedList from 'pages/Feed/List';
import FeedDetails from 'pages/Feed/Details';

export const routes = {
  Login: '/',
  Register: '/register',
  FeedNew: '/feed/new',
  FeedEdit: '/feed/edit',
  FeedList: '/feed/list',
  FeedDetails: '/feed/details'
};

export const history = Platform.OS === 'web' ? createHistory() : undefined;

export const NativeRoutes = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  FeedNew: { screen: FeedNew },
  FeedEdit: { screen: FeedEdit },
  FeedList: { screen: FeedList },
  FeedDetails: { screen: FeedDetails }
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    header: false
  }
});

export const WebRoutes = () => (
  <ConnectedRouter history={history}>
    <View>
      <WebRoute exact path={routes.Login} component={Login} />
      <WebRoute path={routes.Register} component={Register} />
      <WebRoute path={routes.FeedNew} component={FeedNew} />
      <WebRoute path={routes.FeedEdit} component={FeedEdit} />
      <WebRoute path={routes.FeedList} component={FeedList} />
      <WebRoute path={routes.FeedDetails} component={FeedDetails} />
    </View>
  </ConnectedRouter>
);
