import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar } from '@react-native-material/core'
import { AppColors } from '../../utils/app_colors'
import CartItem from './components/CartItem.component'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkCart } from '../../redux/reducers/cart'
import CustomButton from '../../compoments/app_components/CustomButton.component'
import { AppStyles } from '../../utils/styles'

const CartScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkCart())
    }, [])
    const { cart } = useSelector(state => state.cart)
    return (
        <View style={AppStyles.body}>
            <AppBar style={styles.appBar} title={'My Cart'} elevation={0} centerTitle={true} color={AppColors.white}></AppBar>
            <FlatList renderItem={({ item }) => <CartItem product={item} />} data={cart} />
            <CustomButton text={'Checkout'} onTap={() => { }} style={styles.btn} />
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    appBar: {
        height: 70,
    },
    btn: {
        position: 'absolute',
        bottom: 10,
    }
})