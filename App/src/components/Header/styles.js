import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    height: metrics.navBarHeight,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary.base
  },
  left: {
    width: metrics.navBarHeight
  },
  right: {
    width: metrics.navBarHeight
  },
  icon: {
    ...general.headerIcon
  },
  text: {
    alignSelf: 'center',
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.white
  }
});
