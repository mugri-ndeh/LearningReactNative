import { View, Text, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInputField from '../../../compoments/app_components/InputFiled.component'
import CustomButton from '../../../compoments/app_components/CustomButton.component'

import { loginMethod, reset } from './LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../../compoments/app_components/LoadingScreen'
import MyText from '../../../compoments/app_components/MyText'
const LoginScreen = ({ navigation }) => {
    const [userL, setUser] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (loading) {
            console.log('is loading now')


        }
    }, [loading])

    useEffect(() => {

        if (isSuccess) {
            navigation.navigate('HomeScreen')
        }

        dispatch(reset())

    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            console.log(error)
        }


        dispatch(reset())

    }, [isError])




    const { loading, user, error, isSuccess, isError } = useSelector((state) => state.login)

    if (loading) {
        return <LoadingScreen message={'logging in..'} />
    }

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView style={styles.mainBodyView}>
                <View>
                    <Text>{'loading ' + loading + ' isError ' + isError + ' isSuccess ' + isSuccess} </Text>
                </View>
                <MyText style={styles.title} >Login</MyText>
                <MyText style={styles.subTitle} >Enter your email and password</MyText>
                <CustomInputField val={user.email} onChageText={(val) => setUser({ ...userL, email: val })} hint={'Email'} />
                <CustomInputField val={user.password} onChageText={(val) => setUser({ ...userL, password: val })} password={true} hint={'Password'} />
                <MyText style={styles.forgotStyles} >Forgot password?</MyText>
                <CustomButton onTap={() => {
                    dispatch(loginMethod(userL))
                }} text={'Login'} />

                <MyText onPress={() => { navigation.navigate('SignUpScreen') }} style={styles.already} >Don't have an account? Sign Up</MyText>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        justifyContent: 'center'
    },
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