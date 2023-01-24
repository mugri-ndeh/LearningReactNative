import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../modules/cart/CartScreen'
const CartStack = createStackNavigator()
const CartNavigator = () => {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name='CartScreen' component={CartScreen} />
        </CartStack.Navigator>
    )
}
export default CartNavigator