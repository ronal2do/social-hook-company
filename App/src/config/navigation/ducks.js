import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { NativeRoutes, routes } from './routes';
import { routerReducer as webReducer, push, goBack } from 'react-router-redux';

// Creators
export const navigateTo = routeName => Platform.OS !== 'web'
  ? NavigationActions.navigate({ routeName })
  : push(routes[routeName]);
export const back = () => Platform.OS !== 'web'
  ? NavigationActions.back()
  : goBack();

// Reducer
const initialState = NativeRoutes.router.getStateForAction(NavigationActions.init());

const nativeReducer = (state = initialState, action) => {
  const nextState = NativeRoutes.router.getStateForAction(action, state);
  return nextState || state;
};

const reducer = Platform.OS !== 'web' ? nativeReducer : webReducer;

export default reducer;
