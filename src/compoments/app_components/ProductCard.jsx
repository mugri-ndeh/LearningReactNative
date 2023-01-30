import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import AddButton from './AddButton'
import { AppColors } from '../../utils/app_colors'
import { AppStyles } from '../../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../redux/reducers/cart'
const size = Dimensions.get('window')

const ProductCard = ({ product, onTap }) => {
    const dispatch = useDispatch()

    const { cart } = useSelector(state => state.cart)

    return (

        <TouchableOpacity onPress={onTap} style={cardStyles.container}>
            <Image style={cardStyles.image} source={product.image} />
            <Text style={{ ...AppStyles.bodyText, ...cardStyles.text }}> {product.name} </Text>
            <Text style={{ ...AppStyles.bodyText, ...cardStyles.subtile }}> {product.subtitle} </Text>
            <View style={cardStyles.row}>
                <Text style={cardStyles.price}>$4.99</Text>
                <AddButton onTap={() => { dispatch(addCart(product)) }} />
            </View>
        </TouchableOpacity>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        height: 230,
        width: size.width * 0.44,
        borderWidth: 1,
        borderColor: AppColors.grey,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        marginRight: 20,
    },
    image: {
        marginVertical: 20,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color: AppColors.black
    },
    subtile: {
        fontSize: 12,
        color: AppColors.grey_text
    },
})
export default ProductCard