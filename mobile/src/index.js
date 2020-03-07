import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/Reactotronconfig';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

// backgroundColor="#612F74"
