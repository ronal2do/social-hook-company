import { StyleSheet } from 'react-native';
import { metrics, colors } from 'assets/styles';

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

  textField: {
    height: 52,
    backgroundColor: colors.white,
    marginTop: metrics.smallMeasure,
    shadowColor: colors.black,
    shadowRadius: 5,
    shadowOffset: { x: 0, y: -4 },
    shadowOpacity: 0.5,
    borderRadius: metrics.baseRadius,
    padding: metrics.smallMeasure
  },

  button: {
    backgroundColor: colors.primary.light,
    height: 52,
    marginTop: metrics.baseMeasure,
    shadowColor: colors.black,
    shadowRadius: 5,
    shadowOffset: { x: 0, y: -4 },
    shadowOpacity: 0.5
  },

  buttonRegister: {
    marginTop: metrics.baseMeasure,
    flexDirection: 'row'
  }
});
