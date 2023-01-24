import { createStackNavigator } from "@react-navigation/stack"
import FavouriteScreen from "../modules/favourite/FavouriteScreen"

const FavStack = createStackNavigator()
const FavouriteNavigator = () => {
    return (
        <FavStack.Navigator screenOptions={{ headerShown: false }}>
            <FavStack.Screen name="FavouriteScreen" component={FavouriteScreen} />
        </FavStack.Navigator>
    )
}

export default FavouriteNavigator