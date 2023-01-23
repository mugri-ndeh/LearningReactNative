import { Text, ScrollView, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInputField from '../../../compoments/app_components/InputFiled.component'
import CustomButton from '../../../compoments/app_components/CustomButton.component'

import { loginMethod, reset } from './LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../../compoments/app_components/LoadingScreen'
const bg = require('../../../../assets/images/bg.png')


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
        <ImageBackground source={bg} resizeMode="cover" style={{ backgroundColor: '#fff' }}>

            <ScrollView style={styles.body}>
                <Image style={styles.carrotStyle} source={require('../../../../assets/icons/carrot.png')} />
                <Text style={styles.title} >Login</Text>
                <Text style={styles.subTitle} >Enter your email and password</Text>
                <CustomInputField val={user.email} onChageText={(val) => setUser({ ...userL, email: val })} hint={'Email'} />
                <CustomInputField val={user.password} onChageText={(val) => setUser({ ...userL, password: val })} password={true} hint={'Password'} />
                <Text style={styles.forgotStyles} >Forgot password?</Text>
                <CustomButton onTap={() => {
                    dispatch(loginMethod(userL))
                }} text={'Login'} />

                <Text onPress={() => { navigation.navigate('SignUpScreen') }} style={styles.already} >Don't have an account? Sign Up</Text>
            </ScrollView>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor: '#fff'
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 200,
        fontFamily: 'Poppins-Regular'
    },
    carrotStyle: {
        alignSelf: 'center',
        height: 50,
        width: 50,
    },
    subTitle: {
        color: '#7c7c7c',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 30,
        fontFamily: 'Poppins-Regular'
    },

    forgotStyles: {
        alignSelf: 'flex-end',
        marginVertical: 8,
        fontFamily: 'Poppins-Regular'
    },
    already: {
        marginTop: 20,
        alignSelf: 'center'
    }

})

export default LoginScreen