import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInputField = ({ hint, password, onChageText }) => {
    return (
        <View style={styles.inputContainer}>
            <Text>{hint}</Text>
            <TextInput onChangeText={onChageText} secureTextEntry={password} style={styles.inputField}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        height: 40,
        width: '98%',
        borderColor: '#7c7c7c',
        borderWidth: 1,
        borderRadius: 5,
    },
    hintStyle: {
        fontSize: 16,
        color: '#7c7c7c'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})

export default CustomInputField