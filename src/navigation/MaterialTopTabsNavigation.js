import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ROUTES, COLORS, IMGS } from '../constants/index'
import { phoneBookScreen, GroupScreen, AOScreen } from '../screens/index'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 16, fontWeight: 'bold' },
                tabStyle: { width: 120 },
                activeTintColor: COLORS.blue,
                inactiveTintColor: COLORS.gray,
                indicatorStyle: { backgroundColor: COLORS.blue },
            }}>
            <Tab.Screen name={ROUTES.FRIEND} component={phoneBookScreen} />
            <Tab.Screen name={ROUTES.GROUP} component={GroupScreen} />
            <Tab.Screen name={ROUTES.AOV} component={AOScreen} />
        </Tab.Navigator>
    );
}