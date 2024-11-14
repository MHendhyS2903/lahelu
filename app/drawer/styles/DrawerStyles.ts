import { colors } from "../../../constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.background,
  },
  safeAreaStyle: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
    backgroundColor: colors.background,
  },
  contentStyle: {
    maxWidth: 600,
  },
  drawerStyle: {
    width: "60%",
    backgroundColor: colors.background,
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
  menuIconStyle: {
    marginLeft: 16,
  },
  searchIconStyle: {
    marginRight: 16,
  },
  logoStyle: {
    height: 25,
    width: 100,
  },
});
