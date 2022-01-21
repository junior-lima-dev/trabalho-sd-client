import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/routes";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { View } from "react-native";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
        <StatusBar style="dark" />
        <Routes />
      </View>
    </NavigationContainer>
  );
}
