import { createStackNavigator } from "@react-navigation/stack"
import ExploreScreen from "../modules/explore/ExploreScreen"

const ExploreStack = createStackNavigator()
const ExploreNavigator = () => {
    return (
        <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
            <ExploreStack.Screen name="ExploreHome" component={ExploreScreen} />
        </ExploreStack.Navigator>
    )
}

export default ExploreNavigator