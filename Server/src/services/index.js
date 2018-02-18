import feathersGraphQL from 'feathers-graphql-mongoose';
import models from 'models';
import app1 from './app1';
import app2 from './app2';

export default context => {
  feathersGraphQL(models)(context)
    .platform(app1)
    .platform(app2)
    .configure();
};
