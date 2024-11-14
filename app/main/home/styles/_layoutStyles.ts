import { colors } from "../../../../constants/Colors";
import { fonts } from "../../../../constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.background,
    elevation: 0,
    height: 48,
    justifyContent: "center",
  },
  tabBarLabelStyle: {
    fontFamily: fonts.openSansBold,
    textTransform: "none",
    fontSize: 16,
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.laheluBlue,
    height: 2,
  },
});
