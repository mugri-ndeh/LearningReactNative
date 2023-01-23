import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './auth/AuthSlice'
import { useEffect } from 'react'
import { AppStyles } from '../utils/styles'
import { ActivityIndicator } from '@react-native-material/core'
import LoadingScreen from '../compoments/app_components/LoadingScreen'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from '../routes/AuthNavigator'
import BottomNavigation from '../routes/BottomNavigation'

const AppStart = ({ navigation }) => {
    const dispatch = useDispatch()

    const { isLoggedIn, user, isLoading } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(checkAuth())
    }, [])



    useEffect(() => {
        if (isLoggedIn) {
            // navigation.navigate('HomeScreen')
            console.log(user)

        } else {
            // navigation.navigate('LoginScreen')
            console.log('no_user')
        }
        if (isLoading) {
            console.log('loading')
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    } else

        return (
            <NavigationContainer>

                {isLoading && <LoadingScreen />}
                {!isLoggedIn && <AuthNavigator />}
                {isLoggedIn && <BottomNavigation />}
            </NavigationContainer>
        )
}

export default AppStart

const styles = StyleSheet.create({})