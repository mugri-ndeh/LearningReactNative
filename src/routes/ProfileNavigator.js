import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../modules/profile/ProfileScreen'
const ProfileStack = createStackNavigator()
const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}

export default ProfileNavigator