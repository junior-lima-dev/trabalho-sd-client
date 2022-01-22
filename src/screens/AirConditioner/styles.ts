import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  temperatureContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  temperatureTitle: {
    fontFamily: fonts.robotoBold,
    fontSize: 20,
  },
  divider: {
    backgroundColor: "#D3D3D3",
    height: 3,
    width: "100%",
    marginTop: "6%",
  },
  title: {
    fontFamily: fonts.robotoLight,
    fontSize: 14,
    paddingVertical: "8%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    padding: 14,
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
});
