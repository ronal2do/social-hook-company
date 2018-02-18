import { StyleSheet } from 'react-native';
import { colors } from 'assets/styles';

export default StyleSheet.create({
  light: {
    color: colors.white
  },
  dark: {
    color: colors.text.dark
  },
  bold: {
    fontWeight: 'bold'
  },
  disabled: {
    color: colors.disabled
  }
});
