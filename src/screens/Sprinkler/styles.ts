import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  stateContent: {
    alignItems: "center",
    marginTop: 15,
  },
  stateTitle: {
    fontFamily: fonts.robotoLight,
    fontSize: 14,
  },
  stateValue: {
    marginTop: 2,
    fontFamily: fonts.robotoBold,
    fontSize: 35,
  },
  humidityContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  humidityTitle: {
    fontFamily: fonts.robotoBold,
    fontSize: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 30,
  },
  textButton: {
    fontFamily: fonts.robotoBold,
    fontSize: 18,
    color: "#fff",
  },
});
