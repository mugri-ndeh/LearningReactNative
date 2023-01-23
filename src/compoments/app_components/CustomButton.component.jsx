import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ onTap, text }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onTap}>
                <Text style={styles.textStyle} >{text}</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#53B175',
        color: '#fff',
        width: '95%',
        height: 65,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Poppins-Bold'
    }
})

export default CustomButton