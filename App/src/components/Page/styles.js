import { StyleSheet, Platform } from 'react-native';
import { metrics, colors } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: colors.background
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  statusbar: {
    backgroundColor: colors.primary.base,
    height: metrics.statusBarHeight
  }
});
