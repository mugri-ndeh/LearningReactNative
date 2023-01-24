import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'
import { AppColors } from '../utils/app_colors'
import ExploreNavigator from './ExploreNavigator'
import HomeNavigator from './HomeNavigator'
import CartNavigator from './CartNavigator'
import FavouriteNavigator from './FavouriteNavigator'
import ProfileNavigator from './ProfileNavigator'

const Tab = createBottomTabNavigator()
const TAB_ICON = {
    Home: 'home-outline',
    Explore: 'search',
    Cart: 'cart-outline',
    Favourites: 'heart-outline',
    Profile: 'person-outline',
};

const screenOptions = ({ route }) => {
    let iconName = TAB_ICON[route.name];

    return {
        tabBarIcon: ({ color, size }) => {
            return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: AppColors.green,
        tabBarStyle: { backgroundColor: AppColors.white, height: 60 },
        tabBarInactiveTintColor: AppColors.grey_text,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: { filter: 'drop-shadow(2px -5px 15px rgba(85, 94, 88, 0.09))' }

    };
};


const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions} >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Explore" component={ExploreNavigator} />
            <Tab.Screen name="Cart" component={CartNavigator} />
            <Tab.Screen name="Favourites" component={FavouriteNavigator} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator >
    )
}

export default BottomNavigation