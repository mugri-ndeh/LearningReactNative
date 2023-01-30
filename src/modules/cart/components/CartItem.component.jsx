import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../../utils/app_colors'
import { AppStyles } from '../../../utils/styles'
import CountButton from '../../../compoments/app_components/CountButton.component'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addCartQty, checkCart, reduceCartQty, removeCart } from '../../../redux/reducers/cart'

const CartItem = ({ product }) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkCart())
    }, [])
    const { cart } = useSelector(state => state.cart)

    return (
        <View style={styles.body} >
            <Image source={product.image} style={styles.img} />
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.titletext} >{product.name}</Text>
                <Text style={styles.subtitle} >{product.subtitle}</Text>
                <View style={AppStyles.row}>
                    <CountButton onPress={() => { dispatch(reduceCartQty(product)) }} name={'remove'} color={AppColors.black} />
                    <Text style={styles.numberText} >{product.qty}</Text>
                    <CountButton onPress={() => { dispatch(addCartQty(product)) }} name={'add'} color={AppColors.green} />
                </View>
            </View>
            <View style={{ ...AppStyles.column, alignItems: 'flex-end', flex: 1, height: 100, justifyContent: 'space-between', }}>
                <Icon onPress={() => { dispatch(removeCart(product)) }} name='close' color={AppColors.grey_text} size={20} />
                <Text style={styles.titletext} >${product.price === undefined ? '' : parseFloat(product.price.replace('$', '')) * product.qty}</Text>
            </View>
        </View>
    )
}

export default CartItem
const size = Dimensions.get('window')
const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        backgroundColor: AppColors.white,
        marginTop: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        // justifyContent: 'space-between'
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
    },
    img: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    }
})