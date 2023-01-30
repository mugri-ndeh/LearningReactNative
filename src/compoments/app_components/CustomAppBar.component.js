import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar } from '@react-native-material/core'
import { AppColors } from '../../utils/app_colors'

const CustomAppBar = ({ title }) => {
    return (
        <View>
            <AppBar style={styles.appBar} title={title} elevation={0} centerTitle={true} color={AppColors.white} />
        </View>
    )
}

export default CustomAppBar

const styles = StyleSheet.create({
    appBar: {
        height: 70,
    }
})