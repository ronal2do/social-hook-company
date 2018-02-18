import reducer from './ducks';
import connect from './connect';
import component from './Container';

const featureName = 'Login';

export { reducer, featureName };
export default connect(component);
