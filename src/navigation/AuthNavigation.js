import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { defautScreen, loginSrceen, forgetScreen, registion_name, registion_phone } from "../screens/index";
import { ROUTES, IMGS, COLORS } from "../constants/index";
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation from './BottomNavigation';



export default function AuthNavigation() {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.DEFAULT} component={defautScreen} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.LOGIN} component={loginSrceen}
                options={{
                    headerStyle: { backgroundColor: COLORS.blueZalo },
                    headerTitleStyle: { color: COLORS.white },
                    headerTintColor: COLORS.white
                }} />
            <Stack.Screen name={ROUTES.FORGET} component={forgetScreen}
                options={{
                    headerStyle: { backgroundColor: COLORS.blueZalo },
                    headerTitleStyle: { color: COLORS.white },
                    headerTintColor: COLORS.white
                }} />

            <Stack.Screen name={ROUTES.HOME} component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.CHAT} component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.REGISTION} component={registion_name}
                options={{
                    headerStyle: { backgroundColor: COLORS.blueZalo },
                    headerTitleStyle: { color: COLORS.white },
                    headerTintColor: COLORS.white
                }} />
            {/* <Stack.Screen name={ROUTES.REGISTION} component={registion_phone}
                options={{
                    headerStyle: { backgroundColor: COLORS.blueZalo },
                    headerTitleStyle: { color: COLORS.white },
                    headerTintColor: COLORS.white
                }} /> */}
        </Stack.Navigator>
    );
}

