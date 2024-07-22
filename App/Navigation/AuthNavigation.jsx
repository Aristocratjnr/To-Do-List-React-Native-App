import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const AuthNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen component={LoginScreen} name='Login' />
            <Stack.Screen component={RegisterScreen} name='Register' />
        </Stack.Navigator>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})
