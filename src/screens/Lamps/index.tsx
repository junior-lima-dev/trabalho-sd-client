import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderGoBack from "../../components/HeaderGoBack";
import API from "../../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../components/Button";

import { styles } from "./styles";
import Divider from "../../components/Divider";

export default function Lamps() {
  const [luminosity, setLuminosity] = useState("");
  const [lastState, setLastState] = useState("");

  async function load() {
    const res = await API.get("/ligh");
    const res2 = await API.get("/lamp");

    setLuminosity(res.data);
    setLastState(res2.data === "ON" ? "state: ON\n" : "state: OFF\n");
  }

  async function turnOn() {
    const data = {
      estado: "1",
      name: "Lamp",
    };

    const res = await API.post("/onlight", data);
    console.log("RESPOSTA DO SERVER: ", res.data);

    setLastState(res.data);
  }

  async function turnOff() {
    const data = {
      estado: "0",
      name: "Lamp",
    };

    const res = await API.post("/offlight", data);
    console.log("RESPOSTA DO SERVER: ", res.data);

    setLastState(res.data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderGoBack title="Lâmpadas" />

      <View>
        <View style={styles.lampContent}>
          <MaterialCommunityIcons
            name="flash-alert"
            size={42}
            color="#FFC60D"
          />
          <Text style={styles.lampTitle}>Luminosidade {luminosity} %</Text>
        </View>

        <Divider />

        <View style={styles.stateContent}>
          <Text style={styles.stateTitle}>Ultima leitura</Text>
          <Text style={styles.stateValue}>
            {lastState === "state: ON\n" ? "Ligada" : "Desligada"}
          </Text>
        </View>

        <Button
          name={lastState === "state: ON\n" ? "Desligar" : "Ligar"}
          color={lastState === "state: ON\n" ? "#F0240E" : "#44E66A"}
          onPress={
            lastState === "state: ON\n" ? () => turnOff() : () => turnOn()
          }
        />
      </View>
    </View>
  );
}
