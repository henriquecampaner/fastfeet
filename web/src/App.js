import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';

import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes/index';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
