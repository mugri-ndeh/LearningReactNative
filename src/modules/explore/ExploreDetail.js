import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExploreDetail = ({ navigation, route }) => {
    const { product } = route.params

    return (
        <View>
            <Text>{product.name}</Text>
        </View>
    )
}

export default ExploreDetail

const styles = StyleSheet.create({})