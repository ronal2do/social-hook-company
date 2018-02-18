import { StyleSheet } from 'react-native';
import { metrics, colors } from 'assets/styles';

export default StyleSheet.create({
  buttonContainer: {
    height: metrics.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMeasure,
    borderRadius: metrics.baseRadius
  },
  'button-color-primary': {
    backgroundColor: colors.primary.base
  },
  'button-color-secundary': {
    backgroundColor: colors.secundary.base
  },
  'button-color-success': {
    backgroundColor: colors.success
  },
  'button-color-danger': {
    backgroundColor: colors.danger
  },
  'button-color-warning': {
    backgroundColor: colors.warning
  },
  'button-color-info': {
    backgroundColor: colors.info
  },
  'button-color-black': {
    backgroundColor: colors.black
  },
  'button-color-white': {
    backgroundColor: colors.white
  },
  'button-color-default': {
    backgroundColor: colors.default
  }
});
