import { StyleSheet } from 'react-native';
import { metrics, colors, general } from 'assets/styles';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.primary.base
  },

  appname: {
    color: colors.white,
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: metrics.largeMeasure
  },

  textField: { ...general.textField },

  button: { ...general.button },

  buttonRegister: {
    marginTop: metrics.baseMeasure,
    flexDirection: 'row'
  }
});
