import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
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
