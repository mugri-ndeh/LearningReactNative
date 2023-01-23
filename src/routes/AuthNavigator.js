import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../modules/auth/login/LoginScreen'
import SignUpScreen from '../modules/auth/sign_up/SignUpScreen'

const AuthStack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
            <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator