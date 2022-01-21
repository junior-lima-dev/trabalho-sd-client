import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderGoBack from "../../components/HeaderGoBack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import API from "../../services/api";

import { styles } from "./styles";

export default function Sprinkler() {
  async function load() {
    // const res = await API.get("/temperatura");
    // console.log("RESPOSTA DO SERVER: ", res);
  }

  async function irrigate() {
    // const res = await API.get("/temperatura");
    // console.log("RESPOSTA DO SERVER: ", res);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderGoBack title="Irrigadores" />

      <View>
        <View style={styles.humidityContent}>
          <MaterialCommunityIcons
            name="water-percent"
            size={42}
            color="#26C9F0"
          />
          <Text style={styles.stateTitle}>Umidade Valor %</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => irrigate()}>
          <Text style={styles.textButton}>Irrigar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
