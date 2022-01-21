// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Lamps from "../screens/Lamps";
import Sprinkler from "../screens/Sprinkler";
import AirConditioner from "../screens/AirConditioner";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lamps" component={Lamps} />
      <Stack.Screen name="Sprinkler" component={Sprinkler} />
      <Stack.Screen name="AirConditioner" component={AirConditioner} />
    </Stack.Navigator>
  );
}

export default Routes;
