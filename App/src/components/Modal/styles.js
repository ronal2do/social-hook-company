import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderWidth: 0
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: metrics.bigMeasure,
    backgroundColor: colors.transparent.dark
  },
  modalContent: {
    width: '100%',
    padding: metrics.bigMeasure,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white
  },
  modalTitle: {
    alignSelf: 'flex-start',
    marginBottom: metrics.baseMeasure,
    fontSize: fonts.large,
    fontWeight: 'bold',
    color: colors.text.dark
  }
});
