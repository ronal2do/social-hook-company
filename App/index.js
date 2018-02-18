import { AppRegistry, Platform } from 'react-native';
import App from './src';

AppRegistry.registerComponent('SocialHookApp', () => App);

if(Platform.OS === 'web') {
  AppRegistry.runApplication('SocialHookApp', { rootTag: document.getElementById('root') });
}
