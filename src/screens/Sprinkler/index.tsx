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
  const [lastState, setLastState] = useState("");

  async function load() {
    const res = await API.get("/hum");
    const res2 = await API.get("/wat");

    setSprinkler(res.data);
    setLastState(res2.data === "ON" ? "state: ON\n" : "state: OFF\n");
  }

  async function irrigate() {
    const data = {
      estado: "1",
      name: "Wat",
    };

    const res = await API.post("/onwat", data);
    console.log("RESPOSTA DO SERVER: ", res.data);

    setLastState(res.data);
  }

  async function stopIrrigation() {
    const data = {
      estado: "0",
      name: "Wat",
    };

    const res = await API.post("/offwat", data);
    console.log("RESPOSTA DO SERVER: ", res.data);

    setLastState(res.data);
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
            {lastState === "state: ON\n" ? "Ligada" : "Desligada"}
          </Text>
        </View>

        <Button
          name={lastState === "state: ON\n" ? "Desligar" : "Irrigar"}
          color={lastState === "state: ON\n" ? "#F0240E" : "#44E66A"}
          onPress={
            lastState === "state: ON\n"
              ? () => stopIrrigation()
              : () => irrigate()
          }
        />
      </View>
    </View>
  );
}
