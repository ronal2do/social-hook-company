import { connect } from 'react-redux';
import { navigateTo } from 'config/navigation';
import { Counter } from './ducks';

const mapStateToProps = ({ home }) => ({ counter: home.counter });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(Counter.increment()),
  navigateTo: routeName => dispatch(navigateTo(routeName))
});

export default connect(mapStateToProps, mapDispatchToProps);
