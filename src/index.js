import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import {store, persistor} from './store';
import App from './App'

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#572ee1" />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;
