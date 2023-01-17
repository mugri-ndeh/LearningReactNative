import { View, Text, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInputField from '../../../compoments/app_components/InputFiled.component'
import CustomButton from '../../../compoments/app_components/CustomButton.component'

import { loginMethod, reset } from './LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../../compoments/app_components/LoadingScreen'

const LoginScreen = () => {
    const [userL, setUser] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (loading) {
            console.log('is loading now')
        } if (error !== '') {
            console.log(error)
        }

        dispatch(reset())

    }, [loading, error, dispatch])




    const { loading, user, error } = useSelector((state) => state.login)

    if (loading) {
        return <LoadingScreen message={'logging in..'} />
    }

    return (
        <SafeAreaView >
            <ScrollView style={styles.mainBodyView}>
                <View>
                    <Text>{'loading ' + loading + ' error ' + error} </Text>
                </View>
                <Text style={styles.title} >Login</Text>
                <Text style={styles.subTitle} >Enter your email and password</Text>
                <CustomInputField val={user.email} onChageText={(val) => setUser({ ...userL, email: val })} hint={'Email'} />
                <CustomInputField val={user.password} onChageText={(val) => setUser({ ...userL, password: val })} password={true} hint={'Password'} />
                <Text style={styles.forgotStyles} >Forgot password?</Text>
                <CustomButton onTap={() => {
                    dispatch(loginMethod(userL))
                }} text={'Login'} />

                <Text style={styles.already} >Don't have an account? Sign Up</Text>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainBodyView: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 200,
    },

    subTitle: {
        color: '#7c7c7c',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 30,
    },

    forgotStyles: {
        alignSelf: 'flex-end',
        marginVertical: 8,
    },
    already: {
        marginTop: 20,
        alignSelf: 'center'
    }

})

export default LoginScreen