import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { AppColors } from '../../utils/app_colors'

const AddButton = ({ onTap }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onTap}>
            <Icon name='plus' size={17} color={AppColors.white} style={styles.btn} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45.67,
        width: 45.67,
        backgroundColor: AppColors.green,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        fontWeight: 'bold'
    }
})

export default AddButton