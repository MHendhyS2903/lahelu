import { colors } from "../../../constants/Colors";
import { fonts } from "../../../constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: colors.background,
  },
  loginContainer: {
    backgroundColor: colors.black,
    marginHorizontal: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  loginMainText: {
    color: colors.laheluWhite,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: fonts.openSansBold,
  },
  loginSubText: {
    color: colors.laheluWhite,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: fonts.openSans,
  },
  customButton: {
    backgroundColor: colors.laheluBlue,
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.laheluWhite,
    fontSize: 18,
    fontFamily: fonts.openSansBold,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 4,
    color: colors.laheluWhite,
    fontSize: 18,
    marginHorizontal: 28,
    fontFamily: fonts.openSansBold,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 14,
  },
  spacer: {
    height: 1,
    width: "100%",
    backgroundColor: colors.laheluWhite,
    opacity: 0.5,
  },
});
