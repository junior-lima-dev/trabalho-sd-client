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

  async function load() {
    const res = await API.get("/temperatura");
    console.log("RESPOSTA DO SERVER: ", res.data);
    setTemperature(res.data);
  }

  async function changeTemperature() {
    Keyboard.dismiss();

    if (value.length == 0) {
      Alert.alert("Atenção", "É preciso informar a temperatura!");

      return;
    }
    console.log("Temperatura: ", value);
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

        <Text style={styles.title}>Controle de temperatura</Text>

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
