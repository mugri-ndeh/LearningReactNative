import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@react-native-material/core';


const MyText = ({ text }) => {

    return (
        <Text style={styles.text} >{text}</Text>
    );

}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontFamily: 'Poppins-Regular'
    }
})

export default MyText