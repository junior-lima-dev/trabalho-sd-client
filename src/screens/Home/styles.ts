import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 15,
    fontSize: 22,
    fontFamily: fonts.robotoRegular,
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 15,
  },
});
