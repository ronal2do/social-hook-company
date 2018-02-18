import { StyleSheet } from 'react-native';
import { metrics } from 'assets/styles';

export default StyleSheet.create({
  form: {
    marginHorizontal: metrics.baseMeasure
  },

  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: metrics.hugeMeasure,
    marginBottom: metrics.baseMeasure
  },

  button: {
    marginTop: metrics.baseMeasure
  }
});
