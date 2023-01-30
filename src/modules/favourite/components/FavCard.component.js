import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../../utils/app_colors'
import { AppStyles } from '../../../utils/styles'
import Icon from 'react-native-vector-icons/Ionicons'

const FavCard = ({ product }) => {
    return (
        <View style={styles.body} >
            <Image source={product.image} />
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.titletext} >{product.name}</Text>
                <Text style={styles.subtitle} >{product.subtitle}</Text>

            </View>
            <View style={{ ...AppStyles.row, justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>

                <Text style={{ ...styles.titletext, marginRight: 10, }} >{product.price}</Text>
                <Icon name='ios-arrow-forward' color={AppColors.black} size={20} />
            </View>
        </View>
    )
}

export default FavCard
const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        backgroundColor: AppColors.white,
        marginTop: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    titletext: {
        fontFamily: 'Poppins-Bold',
        color: AppColors.black,
        fontSize: 16,
    },
    subtitle: {
        fontFamily: 'Poppins-Regular',
        color: AppColors.grey_text,
        fontSize: 14,

    },
    numberText: {
        fontFamily: 'Poppins-Bold',
        color: AppColors.black,
        fontSize: 16,
        marginHorizontal: 10,
    }
})