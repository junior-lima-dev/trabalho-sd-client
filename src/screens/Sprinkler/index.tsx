import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderGoBack from "../../components/HeaderGoBack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import API from "../../services/api";
import Divider from "../../components/Divider";
import Button from "../../components/Button";

import { styles } from "./styles";
import { colors } from "../../theme/colors";

export default function Sprinkler() {
  const [splinkler, setSprinkler] = useState("");

  async function load() {
    // const res = await API.get("/api/temperature");
    // console.log("RESPOSTA DO SERVER: ", res.data);

    const teste = fetch("http://127.0.0.1:46244/api/temperature").then(
      (res) => {
        console.log("TESTE: ", res);
      }
    );

    // setSprinkler(res.data);
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
          <Text style={styles.humidityTitle}>Umidade {splinkler} %</Text>
        </View>

        <Divider />

        <View style={styles.stateContent}>
          <Text style={styles.stateTitle}>Ultima leitura</Text>
          <Text style={styles.stateValue}>
            {"1" === "1" ? "Ligada" : "Desligada"}
          </Text>
        </View>

        <Button name="Irrigar" color={colors.primary} onPress={() => null} />

        {/* <TouchableOpacity style={styles.button} onPress={() => irrigate()}>
          <Text style={styles.textButton}>Irrigar</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#44E66A" }]}
          onPress={() => null}
        >
          <Text style={styles.textButton}>Ligar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#F0240E" }]}
          onPress={() => null}
        >
          <Text style={styles.textButton}>Desligar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
