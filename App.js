/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import LoginScreen from './src/modules/auth/login/LoginScreen';
import SignUpScreen from './src/modules/auth/sign_up/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/modules/home/Home';




// const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> */}
        <SignUpScreen />

      </Provider>
    </NavigationContainer>


  );
};



export default App;
