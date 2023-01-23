import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../modules/home/Home'
import ExploreScreen from '../modules/explore/ExploreScreen'
import CartScreen from '../modules/cart/CartScreen'
import FavouriteScreen from '../modules/favourite/FavouriteScreen'
import ProfileScreen from '../modules/profile/ProfileScreen'

const Tab = createBottomTabNavigator()
// const TAB_ICON = {
//     HomeMonitoring: All.faTachometerAltFast,
//     HomeDigitalOrderingPage: All.faShoppingBasket,
//     GasVisor: 'isText',
//     ProfileStack: All.faUser,
//     SettingsStack: All.faGear,
// };

// const screenOptions = ({ route }) => {
//     let iconName = TAB_ICON[route.name];

//     return {
//         tabBarIcon: ({ color, size }) => {
//             if (iconName === 'isText') {
//                 return <GIcon width={50} height={40} tintColor={color} />;
//             } else {
//                 return <Icon icon={iconName} size={35} color={color} />;
//             }
//         },
//         tabBarActiveTintColor: LightShade1,
//         tabBarStyle: { backgroundColor: Accent, height: 60 },
//         tabBarInactiveTintColor: PrimaryDark,
//         tabBarHideOnKeyboard: true,
//         tabBarShowLabel: false,
//         headerShown: false,
//     };
// };


const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
            <Tab.Screen name="CartScreen" component={CartScreen} />
            <Tab.Screen name="FavouritesScreen" component={FavouriteScreen} />
            <Tab.Screen name="profileScreen" component={ProfileScreen} />
        </Tab.Navigator >
    )
}

export default BottomNavigation