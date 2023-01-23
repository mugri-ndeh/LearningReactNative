import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const CartStack = createStackNavigator()
const CartNavigator = () => {
    return (
        <CartStack.Navigator screenOptions={{ headerShowm: false }}>

        </CartStack.Navigator>
    )
}
export default CartNavigator