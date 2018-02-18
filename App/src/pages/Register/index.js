import reducer from './ducks';
import connect from './connect';
import component from './Container';

const featureName = 'Register';

export { reducer, featureName };
export default connect(component);
