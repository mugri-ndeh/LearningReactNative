import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyles } from '../../../utils/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { AppColors } from '../../../utils/app_colors'

const ProfileCard = ({ iconName, title }) => {
    return (
        <View style={styles.main}>
            <Icon name={iconName} size={20} color={AppColors.black} />
            <View style={styles.center}>
                <Text style={styles.text} >{title}</Text>
            </View>
            <Icon name={'arrow-forward'} size={20} color={AppColors.black} />
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        backgroundColor: AppColors.white,
        paddingVertical: 20,
        paddingHorizontal: 20,

    },
    center: {
        flex: 1,
        marginLeft: 15
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        color: AppColors.black,
    }
})