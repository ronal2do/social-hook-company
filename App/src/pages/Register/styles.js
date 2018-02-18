import { StyleSheet } from 'react-native';
import { metrics, colors, general } from 'assets/styles';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.primary.base
  },

  title: {
    color: colors.white,
    fontSize: 65,
    fontWeight: 'bold'
  },

  textField: { ...general.textField },

  button: { ...general.button }
});
