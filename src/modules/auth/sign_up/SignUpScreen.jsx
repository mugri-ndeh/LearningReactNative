import { View, Text, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInputField from '../../../compoments/app_components/InputFiled.component'
import CustomButton from '../../../compoments/app_components/CustomButton.component'
import { useDispatch, useSelector } from 'react-redux'
import { registerMethod } from './SignUpSlice'
import LoadingScreen from '../../../compoments/app_components/LoadingScreen'
import MyText from '../../../compoments/app_components/MyText'


const SignUpScreen = ({ navigation }) => {
    const [userM, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    useEffect(() => {
        if (loading) {
            console.log('is loading now')
        }
        if (isError) {
            console.log(error)
        }
        if (isSuccess) {
            navigator.navigate('HomeScreen')
        }

    }, [loading, isError, isSuccess, dispatch, navigation])


    const dispatch = useDispatch();
    const { loading, isError, isSuccess, error } = useSelector((state) => state.register)

    return (
        <SafeAreaView >
            {loading ? <LoadingScreen message={'Creating account please wait'} /> : <ScrollView style={styles.mainBodyView}>
                <View></View>
                <MyText style={styles.title} text={'Sign up'} />
                <MyText style={styles.subTitle} text={'Enter your credentials to continue'} />
                <CustomInputField onChageText={(val) => setUser({ ...userM, username: val })} hint={'Username'} />
                <CustomInputField onChageText={(val) => setUser({ ...userM, email: val })} hint={'Email'} />
                <CustomInputField onChageText={(val) => setUser({ ...userM, password: val })} password={true} hint={'Password'} />
                <View style={styles.sizedbox} />
                <CustomButton onTap={() => {
                    dispatch(registerMethod(userM))
                }} text={'Sign Up'} />
                <Mytext onPress={() => navigation.navigate('LoginScreen')} style={styles.already} text={'Already have an account? Login'} />
            </ScrollView>}
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

    sizedbox: {
        marginVertical: 8,
    },
    already: {
        marginTop: 20,
        alignSelf: 'center'
    }

})

export default SignUpScreen