import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { responsive } from '../utils/responsive';
import screens from '../consts/screens';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import ProfileScreen from '../screens/Profile';
import theme from '../consts/design/theme';
/**
 * RootNavigator Component
 * Main bottom tab navigator containing all main app screens
 */

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name={screens.home}
                component={HomeScreen}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: () => (
                        <AntDesign name="home" size={responsive.number(28)} color={theme.colors.black} />
                    )

                }} />

            <Tab.Screen
                name={screens.settings}
                component={SettingsScreen}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: () => (
                        <Ionicons name="settings" size={responsive.number(28)} color={theme.colors.black} />
                    )
                }} />

            <Tab.Screen
                name={screens.profile}
                component={ProfileScreen}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: () => (
                        <AntDesign name="user" size={responsive.number(28)} color={theme.colors.black} />
                    )
                }} />

        </Tab.Navigator>
    )
}

export default RootNavigator;