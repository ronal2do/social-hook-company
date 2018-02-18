import types from './types.gql';
import hooks from './hooks';

const User = {
  types,
  hooks,
  modelName: 'User',
  path: '/users'
};

export default User;
