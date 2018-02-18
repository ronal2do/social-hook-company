import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { PersistGate } from 'redux-persist/es/integration/react';

import 'config/reactotron';
import 'config/icons';

import { store, persistor } from 'config/redux';
import client from 'config/apollo';
import Navigator from 'config/navigation';

import { AsyncStorage } from 'react-native';

AsyncStorage.clear();

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </ApolloProvider>
  </Provider>
);

export default App;
