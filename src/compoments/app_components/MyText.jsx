import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const MyText = ({ text }) => {

    return (
        <Text style={styles.text} >{text}</Text>
    );

}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontFamily: 'Poppins-Black'
    }
})

export default MyText