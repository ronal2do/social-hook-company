import { Platform } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';

if(process.env.NODE_ENV === 'development' || process.env.BABEL_ENV === 'development' || __DEV__) {
  const tron = Reactotron.configure();

  if(Platform.OS !== 'web') tron.useReactNative();

  tron.use(reactotronRedux()).connect();
  tron.clear();

  console.tron = tron;
}
