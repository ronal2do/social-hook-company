import { connect } from 'react-redux';
import { submit } from 'redux-form';

const mapDispatchToProps = (dispatch, { form }) => ({
  onPress: () => dispatch(submit(form))
});

export default connect(null, mapDispatchToProps);
