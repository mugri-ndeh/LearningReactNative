import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInputField from '../../../compoments/app_components/InputFiled.component'
import CustomButton from '../../../compoments/app_components/CustomButton.component'
import { firebase } from '@react-native-firebase/auth'

import { loginMethod } from './LoginSlice'
import store from '../../../redux/store'

const LoginScreen = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(!isLoading)
    //     return () => { }
    // }, [isLoading])



    const login = () => {
        store.dispatch(loginMethod())

        // const auth = firebase.auth()
        // auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    return (
        <SafeAreaView >
            <ScrollView style={styles.mainBodyView}>
                <View></View>
                <Text style={styles.title} >Login</Text>
                <Text style={styles.subTitle} >Enter your email and password</Text>
                <CustomInputField onChageText={(val) => setUser({ ...user, email: val })} hint={'Email'} />
                <CustomInputField onChageText={(val) => setUser({ ...user, password: val })} password={true} hint={'Password'} />
                <Text style={styles.forgotStyles} >Forgot password?</Text>
                <CustomButton onTap={() => {
                    login()
                    console.log('ok')
                }} text={'Login'} />

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
    }

})

export default LoginScreen