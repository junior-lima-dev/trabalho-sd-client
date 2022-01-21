import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    width: "45%",
    marginBottom: "10%",
    borderRadius: 10,
    elevation: 10,
    backgroundColor: "white",
  },
  card: {
    alignItems: "center",
    padding: 15,
  },
  title: {
    marginTop: 5,
    fontFamily: fonts.robotoLight,
    fontSize: 15,
  },
});
