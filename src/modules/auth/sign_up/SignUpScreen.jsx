import { View, Text, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInputField from '../../../compoments/app_components/InputFiled.component'
import CustomButton from '../../../compoments/app_components/CustomButton.component'
import { useDispatch, useSelector } from 'react-redux'
import { registerMethod } from './SignUpSlice'
import LoadingScreen from '../../../compoments/app_components/LoadingScreen'
const bg = require('../../../../assets/images/bg.png')



const SignUpScreen = ({ navigation }) => {
    const [userM, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })
    const dispatch = useDispatch();
    const { loading, isError, isSuccess, error } = useSelector((state) => state.register)

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




    return (
        <ImageBackground source={bg} resizeMode="cover" style={{ backgroundColor: '#fff' }}>
            <SafeAreaView >
                {loading ? <LoadingScreen message={'Creating account please wait'} /> : <ScrollView style={styles.mainBodyView}>
                    <Image style={styles.carrotStyle} source={require('../../../../assets/icons/carrot.png')} />
                    <Text style={styles.title}>Sign up</Text>
                    <Text style={styles.subTitle}>Enter your credentials to continue</Text>
                    <CustomInputField onChageText={(val) => setUser({ ...userM, username: val })} hint={'Username'} />
                    <CustomInputField onChageText={(val) => setUser({ ...userM, email: val })} hint={'Email'} />
                    <CustomInputField onChageText={(val) => setUser({ ...userM, password: val })} password={true} hint={'Password'} />
                    <View style={styles.sizedbox} />
                    <CustomButton onTap={() => {
                        dispatch(registerMethod(userM))
                    }} text={'Sign Up'} />
                    <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.already}>Already have an account? Login</Text>
                </ScrollView>}
            </SafeAreaView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    mainBodyView: {
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: 'Poppins-Regular'
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