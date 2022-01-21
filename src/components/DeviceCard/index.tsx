import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { fonts } from "../../theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { styles } from "./styles";

type Props = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  deviceName: string;
  routeName: string;
};

export default function DeviceCard({ iconName, deviceName, routeName }: Props) {
  const navigatiuon: NavigationProp<any> = useNavigation();

  function navigateToDeviceDetails(route: string) {
    navigatiuon.navigate(route);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToDeviceDetails(routeName)}
    >
      <View style={styles.card}>
        <MaterialCommunityIcons
          name={iconName}
          size={70}
          color={colors.primary}
        />
        <Text style={styles.title}>{deviceName}</Text>
      </View>
    </TouchableOpacity>
  );
}
