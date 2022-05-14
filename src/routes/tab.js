import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "../screens/Profile";
import HomeScreen from "../screens/Home";
import CustomTabBar from "../components/CustomTabBar";

const { Navigator, Screen } = createBottomTabNavigator();

const MainTab = () => (
    <Navigator
        tabBar={ props => <CustomTabBar { ...props } /> }
        screenOptions={{
            headerShown: false
        }}
    >
        <Screen name="Home" component={HomeScreen}/>
        <Screen name="Profile" component={ProfileScreen}/>
    </Navigator>
);

export default MainTab;