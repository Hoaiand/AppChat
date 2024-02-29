import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefautScreen from "./src/screens/auth/defautScreen";
import AuthNavigation from "./src/navigation/AuthNavigation";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Defaut" component={DefautScreen} />
      </Stack.Navigator> */}

      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;