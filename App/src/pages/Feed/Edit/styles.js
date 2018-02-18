import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  content: {
    alignItems: 'center'
  },

  image: {
    height: 80,
    width: 80,
    marginTop: metrics.hugeMeasure
  },

  welcome: {
    fontSize: fonts.big,
    margin: metrics.smallMeasure
  },

  instructions: {
    color: colors.text.dark,
    marginBottom: metrics.tinyMeasure
  },

  counter: {
    margin: metrics.largeMeasure,
    color: colors.text.dark,
    fontSize: fonts.big
  },

  button: {
    marginBottom: metrics.smallMeasure
  }
});
