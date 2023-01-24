import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../modules/home/Home"
import HomeDetail from "../modules/home/HomeDetail"

const HomeStack = createStackNavigator()
const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator