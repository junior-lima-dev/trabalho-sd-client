import React from "react";
import { View, Text } from "react-native";
import { fonts } from "../../theme/fonts";

import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema Inteligente</Text>
      {/* <Text style={styles.content}>
        Aqui você pode monitorar e controlar o ambiente do seu lar.
      </Text> */}
    </View>
  );
}
