import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const LoadingScreen = ({ message }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator></ActivityIndicator>
            <Text>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
})

export default LoadingScreen