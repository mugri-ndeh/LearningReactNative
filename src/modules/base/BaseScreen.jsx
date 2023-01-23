import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/Home';

const Tab = createBottomTabNavigator();

function BaseScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

export default BaseScreen;