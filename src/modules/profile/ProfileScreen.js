import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyles } from '../../utils/styles'
import HeaderProfile from './components/Header.component'
import ProfileCard from './components/ProfileCard.component'

const ProfileScreen = () => {
    return (
        <View style={styles.body}>
            <HeaderProfile />
            <ProfileCard title={'Orders'} iconName={'cart'} />
            <ProfileCard title={'My details'} iconName={'cart'} />
            <ProfileCard title={'Delivery Address'} iconName={'location-outline'} />
            <ProfileCard title={'Payment Methods'} iconName={'cart'} />
            <ProfileCard title={'promo Card'} iconName={'cart'} />
            <ProfileCard title={'Notifications'} iconName={'notifications-outline'} />
            <ProfileCard title={'Help'} iconName={'help'} />
            <ProfileCard title={'About'} iconName={'information-circle-outline'} />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,

    }
})