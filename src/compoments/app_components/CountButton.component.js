import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { AppColors } from '../../utils/app_colors'

const CountButton = ({ name, color, onPress }) => {
    return (
        <View style={styles.body} >
            <Icon onPress={onPress} name={name} color={color} size={20} />
        </View>
    )
}

export default CountButton

const styles = StyleSheet.create({
    body: {
        padding: 8,
        borderColor: AppColors.grey,
        borderRadius: 10,
        borderWidth: 1,
    }
})