import { colors } from "../../../constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    minHeight: 42,
    paddingHorizontal: 32,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.laheluWhite,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 16,
    color: colors.laheluWhite,
  },
  spacer: {
    flex: 1,
  },
});
