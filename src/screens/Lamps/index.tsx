import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderGoBack from "../../components/HeaderGoBack";
import API from "../../services/api";

import { styles } from "./styles";

export default function Lamps() {
  async function load() {
    // const res = await API.get("/temperatura");
    // console.log("RESPOSTA DO SERVER: ", res);
  }

  async function turnOnOff() {
    // const res = await API.get("/temperatura");
    // console.log("RESPOSTA DO SERVER: ", res);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderGoBack title="Lâmpadas" />

      <View>
        <View style={styles.stateContent}>
          <Text style={styles.stateTitle}>Ultima leitura</Text>
          <Text style={styles.stateValue}>Valor</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => turnOnOff()}>
          <Text style={styles.textButton}>Ligar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#F0240E" }]}
          onPress={() => turnOnOff()}
        >
          <Text style={styles.textButton}>Desligar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
