import React from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3c64ad" />
      <Routes />
    </>
  );
};

export default App;
