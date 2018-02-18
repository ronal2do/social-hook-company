import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { reducer as formReducer } from 'redux-form';
import { reducer as navReducer } from 'config/navigation';

import { reducer as homeReducer } from 'pages/Home';

export default persistCombineReducers({
  key: 'root',
  storage,
  blacklist: ['form', 'nav']
}, {
  form: formReducer,
  nav: navReducer,
  home: homeReducer
});