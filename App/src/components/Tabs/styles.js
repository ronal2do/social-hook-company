import { StyleSheet } from 'react-native';
import { colors } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },

  activated: {
    color: colors.primary.base
  },

  disabled: {
    color: colors.disabled
  }
});
