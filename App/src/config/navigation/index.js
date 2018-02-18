import reducer, { navigateTo, back } from './ducks';
import { history } from './routes';
import connect from './connect';
import component from './Container';

export { reducer, navigateTo, back, history };
export default connect(component);
