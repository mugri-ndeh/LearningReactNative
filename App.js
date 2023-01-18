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
import HomeScreen from './src/modules/home/Home';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
        {/* <SignUpScreen /> */}

      </Provider>
    </NavigationContainer>


  );
};



export default App;
