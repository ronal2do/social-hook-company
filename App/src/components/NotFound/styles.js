import { StyleSheet } from 'react-native';
import { colors } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginBottom: 30,
    color: colors.text.light
  },
  text: {
    color: colors.text.light
  }
});
