import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { AppColors } from '../../utils/app_colors'
import { AppStyles } from '../../utils/styles'
import CustomButton from '../../compoments/app_components/CustomButton.component'

const HomeDetail = ({ navigation, route }) => {
    const { product } = route.params
    return (
        <ScrollView style={{ ...AppStyles.body, paddingHorizontal: 0 }} >
            <View style={styles.topContainer}>
                <View style={styles.appBar}>
                    <Icon color={AppColors.black} name="ios-arrow-back-outline" size={25} />
                    <Icon color={AppColors.black} onPress={() => navigation.navigate('HomeScreen')} name="ios-share-outline" size={25} />
                </View>
                <View style={styles.image}  >
                    <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain', alignSelf: 'center' }} source={product.image} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }} >
                <View style={styles.nameRow}>
                    <View>
                        <Text style={styles.big_heading}>{product.name}</Text>
                        <Text style={{ ...styles.littleText, fontSize: 16, fontWeight: 'bold' }}>{product.subtitle}</Text>
                    </View>
                    <Icon name='ios-heart-outline' size={25} color={AppColors.black} />
                </View>
                <View style={styles.priceRow}>
                    <View style={styles.numberRow}>
                        <Icon name='ios-remove' size={25} color={AppColors.black} />
                        <Text style={{ fontWeight: 'bold', color: AppColors.black }} >1</Text>
                        <Icon name='ios-add' color={AppColors.green} size={25} />

                    </View>
                    <Text style={styles.big_heading}> {product.price} </Text>
                </View>

                <View style={{ ...styles.priceRow, marginTop: 30, marginBottom: 5 }} >
                    <Text style={styles.heading}>Product Detail</Text>
                    <Icon name='ios-arrow-down' size={25} color={AppColors.black} />
                </View>
                <Text style={styles.littleText} >Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet. </Text>
                <View style={{ ...styles.priceRow, marginTop: 30, marginBottom: 5 }} >
                    <Text style={styles.heading}>Nutritions</Text>
                    <Icon name='ios-arrow-forward' size={25} color={AppColors.black} />
                </View>

                <View style={{ ...styles.priceRow, marginTop: 30, marginBottom: 5 }} >
                    <Text style={styles.heading}>Review</Text>
                    <View style={AppStyles.row}>
                        <Icon name='ios-star' color={'orange'} size={15} />
                        <Icon name='ios-star' color={'orange'} size={15} />
                        <Icon name='ios-star' color={'orange'} size={15} />
                        <Icon name='ios-star' color={'orange'} size={15} />
                        <Icon name='ios-star' color={'orange'} size={15} />
                        <Icon name='ios-arrow-forward' size={25} color={AppColors.black} />
                    </View>
                </View>
                <CustomButton style={{ marginTop: 20, width: '100%', marginBottom: 15 }} onTap={() => { }} text={'Add To Basket'} />
            </View>

        </ScrollView>
    )
}

export default HomeDetail
const size = Dimensions.get('window')
const styles = StyleSheet.create({
    topContainer: {
        width: size.width,
        height: size.height * 0.4,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: AppColors.grey,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: size.width,
        top: 0,
        height: 60,
        paddingHorizontal: 10,
    },
    image: {
        width: size.width * 0.65,
        height: size.width * 0.55,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        color: AppColors.black,
    },
    big_heading: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        color: AppColors.black,
    },
    littleText: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: AppColors.grey_text,
    }
})