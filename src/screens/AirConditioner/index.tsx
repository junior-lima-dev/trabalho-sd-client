import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import HeaderGoBack from "../../components/HeaderGoBack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import API from "../../services/api";

import { styles } from "./styles";

export default function AirConditioner() {
  const [value, setValue] = useState("");
  const [temperature, setTemperature] = useState("");
  const [lastState, setLastState] = useState("---");

  async function load() {
    const res = await API.get("/temperature");
    const res2 = await API.get("/air");
    console.log("RESPOSTA DO SERVER: ", res.data);
    setTemperature(res.data);

    if (res2.data === "state: STRONG\n") {
      setLastState("Forte");
    } else if (res2.data === "state: WEAK\n") {
      setLastState("Fraca");
    } else if (res2.data === "state: MEDIUM\n") {
      setLastState("Média");
    } else {
      setLastState("Desligado");
    }
  }

  async function changeTemperature() {
    Keyboard.dismiss();

    if (value.length == 0) {
      Alert.alert("Atenção", "É preciso informar a temperatura!");

      setValue("");

      return;
    }

    if (Number(value) > 3) {
      Alert.alert("Atenção", "Esse valor não é válido!");

      setValue("");

      return;
    }

    console.log("Temperatura: ", value);

    const data = {
      estado: `${value}`,
      name: "Air",
    };

    const res = await API.post("/air", data);
    console.log("RESPOSTA DO SERVER: ", res.data);

    setValue("");

    if (res.data === "state: STRONG\n") {
      setLastState("Forte");
    } else if (res.data === "state: WEAK\n") {
      setLastState("Fraca");
    } else if (res.data === "state: MEDIUM\n") {
      setLastState("Média");
    } else {
      setLastState("Desligado");
    }
    // const res = await API.get("/temperatura");
    // console.log("RESPOSTA DO SERVER: ", res);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderGoBack title="Ar-condicionado" />

      <View>
        <View style={styles.temperatureContent}>
          <MaterialCommunityIcons
            name="thermometer"
            size={42}
            color="#26F0D6"
          />
          <Text style={styles.temperatureTitle}>
            Temperatura {temperature} °C
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stateContent}>
          <Text style={styles.stateTitle}>Ultima leitura</Text>
          <Text style={styles.stateValue}>{lastState}</Text>
        </View>

        <Text style={styles.title}>
          Controle de temperatura - Escolha de 0 à 3
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Digite o valor da temperatura"
          onChangeText={(text) => setValue(text)}
          value={value}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => changeTemperature()}
        >
          <Text style={styles.textButton}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
