import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: "18%",
    borderBottomRightRadius: 48,
    borderBottomLeftRadius: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: 22,
    color: "white",
  },
  content: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    color: "white",
    width: "85%",
  },
});
