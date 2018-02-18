import mongoose from 'mongoose';

export default context => {
  mongoose.connect(context.get('mongodb'));
  mongoose.Promise = global.Promise;
  context.set('mongooseClient', mongoose);
};
