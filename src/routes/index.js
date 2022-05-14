import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PreloadScreen from '../screens/Preload';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import MainTab from "./tab";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Preload'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Preload" component={PreloadScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="MainTab" component={MainTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;