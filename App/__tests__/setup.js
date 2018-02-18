import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native', () => ({
  StyleSheet: {
    create: styles => styles
  },
  Platform: {
    OS: 'ios'
  },
  NativeModules: {
    SettingsManager: {
      settings: {
        AppleLocale: 'en-US'
      }
    }
  }
}));
