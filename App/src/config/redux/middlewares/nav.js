import { routerMiddleware } from 'react-router-redux';
import { history } from 'config/navigation';

export default routerMiddleware(history);
