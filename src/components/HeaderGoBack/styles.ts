import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 15,
    fontFamily: fonts.robotoRegular,
    fontSize: 25,
    color: colors.primary,
    lineHeight: 30,
  },
});
