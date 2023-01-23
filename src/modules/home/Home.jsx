import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../compoments/app_components/SearchBar'
import { ScrollView } from 'react-native-gesture-handler'
import { AppColors } from '../../utils/app_colors'
import { AppStyles } from '../../utils/styles'
import Icon from 'react-native-vector-icons/Feather'
import ProductCard from '../../compoments/app_components/ProductCard'
import { productsHomeE, productsHomeG, productsHomeB } from '../../utils/data'

const HomeScreen = () => {

    // useEffect(() => {


    // },)

    return (
        <ScrollView style={AppStyles.body}>
            <Image style={styles.carrotStyle} source={require('../../../assets/icons/carrot.png')} />
            <View style={[AppStyles.row, AppStyles.center, styles.title]}>
                <Icon name="map-pin" size={15} color={AppColors.grey_text} />
                <Text style={styles.text}>Dhaka, Banassre</Text>
            </View>
            <SearchBar />
            <Image source={require('../../../assets/images/banner.png')} style={{ ...AppStyles.center, width: '100%', height: 150, marginTop: 20, borderRadius: 10 }} />
            <View style={{ ...AppStyles.row, ...styles.row }}>
                <Text style={AppStyles.headingText}> Exclusive Offer </Text>
                <Text style={{ ...AppStyles.bodyText, color: AppColors.green }}> See All</Text>
            </View>
            <ScrollView nestedScrollEnabled={true} horizontal >
                {productsHomeE.map((item, index) => {
                    return (<ProductCard key={index} product={item} />)
                })}
            </ScrollView>
            <View style={{ ...AppStyles.row, ...styles.row }}>
                <Text style={AppStyles.headingText}> Best Selling </Text>
                <Text style={{ ...AppStyles.bodyText, color: AppColors.green }}> See All</Text>
            </View>

            <ScrollView nestedScrollEnabled={true} horizontal >
                {productsHomeB.map((item, index) => {
                    return (<ProductCard key={index} product={item} />)
                })}
            </ScrollView>

            <View style={{ ...AppStyles.row, ...styles.row }}>
                <Text style={AppStyles.headingText}> Groceries </Text>
                <Text style={{ ...AppStyles.bodyText, color: AppColors.green }}> See All</Text>
            </View>
            <ScrollView nestedScrollEnabled={true} horizontal >
                {productsHomeG.map((item, index) => {
                    return (<ProductCard key={index} product={item} />)
                })}
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scollView: {
        backgroundColor: '#000'
    },
    text: {
        fontFamily: 'Poppins-Regular',
        color: AppColors.grey_text,
        alignSelf: 'center',
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 18,
    },
    carrotStyle: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        marginVertical: 10,
    },
    title: {
        marginBottom: 10,
    },
    row: {
        marginVertical: 20, justifyContent: 'space-between',
    }


})

export default HomeScreen