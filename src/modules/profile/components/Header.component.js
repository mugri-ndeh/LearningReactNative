import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderProfile = () => {
    return (
        <View style={styles.main}>
            <Image source={require('../../../../assets/images/profile.png')} ></Image>
            <View style={{ marginLeft: 15 }}>
                <Text>Afsar Hossen</Text>
                <Text>Imshuvo97@gmail.com</Text>
            </View>
        </View>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingVertical: 30
    }

})