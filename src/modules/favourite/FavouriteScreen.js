import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomAppBar from '../../compoments/app_components/CustomAppBar.component'
import FavCard from './components/FavCard.component'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkFav } from '../../redux/reducers/favourites'
import { FlatList } from 'react-native-gesture-handler'

const FavouriteScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkFav())
    }, [])
    const { favourites } = useSelector(state => state.favourites)

    return (
        <View>
            <CustomAppBar title={'Favourites'} />
            <FlatList renderItem={({ item }) => <FavCard product={item} />} data={favourites} />
        </View>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})