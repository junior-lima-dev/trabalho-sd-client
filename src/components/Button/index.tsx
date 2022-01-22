import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  color: string;
  onPress: () => void;
};

export default function Button({ name, color, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{name}</Text>
    </TouchableOpacity>
  );
}
