import { StyleSheet } from "react-native";
import { AppColors } from "./app_colors";

export const AppStyles = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
        backgroundColor: AppColors.white,
        minHeight: '100%'
    },
    authbody: {
        paddingHorizontal: 20,
        backgroundColor: AppColors.white,
        minHeight: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignSelf: 'center',
    },
    column: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    headingText: {
        fontStyle: 'Poppins-Regular',
        fontWeight: 'bold',
        fontSize: 24,
        color: AppColors.black,
    },
    bodyText: {
        fontStyle: 'Poppins-Regular',
        fontSize: 16,
        color: AppColors.black,
    }
})