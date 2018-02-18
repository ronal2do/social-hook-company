import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  item: {
    marginTop: metrics.baseMeasure
  },
  label: {
    color: colors.text.base
  },
  lightColorLabel: {
    color: colors.text.light
  },
  errorLabel: {
    color: colors.error
  },
  input: {
    height: metrics.inputHeight,
    fontSize: fonts.medium,
    color: colors.text.dark,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.base
  },
  lightInput: {
    color: colors.text.light,
    borderBottomColor: colors.text.light
  },
  errorInput: {
    borderBottomColor: colors.error
  },
  error: {
    color: colors.error,
    marginTop: metrics.tinyMeasure
  }
});
