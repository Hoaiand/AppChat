import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ROUTES, COLORS, IMGS } from '../constants/index'
import { chatScreen, phoneBookScreen, discoverScreen, diaryScreen, meScreen } from '../screens/index'
import MaterialTopTabsNavigation from './MaterialTopTabsNavigation'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BottomNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name={ROUTES.CHAT} component={chatScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbox" size={size} color={color} />
                ),
            }}
            />
            <Tab.Screen name={ROUTES.PHONEBOOK} component={MaterialTopTabsNavigation}
                options={{
                    headerStyle: { backgroundColor: COLORS.blueZalo },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={size} color={color} />
                    ),
                }} />

            <Tab.Screen name={ROUTES.DISCOVER} component={discoverScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="compass" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name={ROUTES.DIARY} component={diaryScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="book" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name={ROUTES.ME} component={meScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
}
