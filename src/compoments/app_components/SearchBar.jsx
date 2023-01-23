
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AppColors } from '../../utils/app_colors'
import Icon from 'react-native-vector-icons/Feather'

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <Icon name='search' size={20} color={AppColors.black} />
            <TextInput style={styles.inputContainerStyle} variant='standard' placeholder="Search Store"  ></TextInput>
        </View>
    )

}


const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: AppColors.grey,
        borderRadius: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    inputContainerStyle: {
        flex: 1,
        marginLeft: 5,
        marginTop: 2,
        fontFamily: 'Poppins-Regular',
    }
})

export default SearchBar