import { colors } from "../../../constants/Colors";
import { fonts } from "../../../constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 28,
  },
  iconContainer: {
    marginRight: 14,
  },
  itemText: {
    fontSize: 14,
    color: colors.laheluWhite,
  },
  itemTextActive: {
    fontSize: 18,
    fontFamily: fonts.openSansBold,
  },
});
