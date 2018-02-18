import colors from './colors';
import metrics from './metrics';

export default {
  headerIcon: {
    fontSize: 30,
    color: colors.white
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
  }
};
