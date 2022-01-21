import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import DeviceCard from "../../components/DeviceCard";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Dispositivos</Text>

      <View style={styles.menu}>
        <DeviceCard
          iconName="outdoor-lamp"
          deviceName="Lâmpadas"
          routeName="Lamps"
        />
        <DeviceCard
          iconName="air-conditioner"
          deviceName="Ar-condicionado"
          routeName="AirConditioner"
        />
        <DeviceCard
          iconName="sprinkler-variant"
          deviceName="Irrigadores"
          routeName="Sprinkler"
        />
      </View>
    </View>
  );
}
