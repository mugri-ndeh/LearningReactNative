import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyles } from '../../utils/styles'
import { AppColors } from '../../utils/app_colors'
import SearchBar from '../../compoments/app_components/SearchBar'
import { exploreList } from '../../utils/data'

const size = Dimensions.get('window')


const ExploreScreen = () => {
    return (
        <View style={{ ...AppStyles.body }}>
            <Text style={styles.text}>Find Products</Text>
            <SearchBar />
            <FlatList style={{ marginTop: 25, alignSelf: 'center' }} numColumns={2} ItemSeparatorComponent={<View style={{ height: 10 }} />} data={exploreList} renderItem={({ item }) => {
                return (
                    <View style={{ ...styles.card, backgroundColor: addopacity(item.color, 0.25), borderColor: item.color }}>
                        <Image source={item.image} />
                        <Text style={styles.card_text} > {item.title}</Text>
                    </View>
                )
            }} />
        </View>
    )
}

export default ExploreScreen
const addopacity = (color, opacity) => {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-Bold',
        color: AppColors.black,
        alignSelf: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    card: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        width: size.width * 0.43,
        height: 180,
        marginHorizontal: 5,
    },
    card_text: {
        marginTop: 25,
        textAlign: 'center',
        color: AppColors.black
    }
})