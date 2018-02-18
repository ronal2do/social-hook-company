import { connect } from 'react-redux';
import { navigateTo } from 'config/navigation';

const mapStateToProps = ({}) => ({ });
const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => dispatch(navigateTo(routeName))
});

export default connect(mapStateToProps, mapDispatchToProps);
