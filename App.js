/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ReduxToolKitCounterComponent from './src/compoments/learning_components/ReduxToolKitCounterComponent';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import LoginScreen from './src/modules/auth/login/LoginScreen';


const App = () => {

  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>

  );
};



export default App;
