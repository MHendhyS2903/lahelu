import { colors } from "../../../../constants/Colors";
import { fonts } from "../../../../constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: colors.background,
    marginBottom: 4,
  },
  profileRowStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginHorizontal: 16,
  },
  profileImageStyle: {
    width: 28,
    height: 28,
    borderRadius: 20,
    marginRight: 8,
  },
  userNameStyle: {
    fontSize: 14,
    marginStart: 2,
    fontFamily: fonts.openSansBold,
    color: colors.laheluWhite,
  },
  timeAgoStyle: {
    fontSize: 12,
    marginStart: 6,
    marginTop: 2,
    fontFamily: fonts.openSans,
    color: colors.codeB7B7B7,
  },
  spacer: {
    flex: 1,
  },
  textContent: {
    fontSize: 18,
    marginBottom: 8,
    color: colors.laheluWhite,
    fontFamily: fonts.openSansBold,
    marginHorizontal: 16,
  },
  mediaContent: {
    width: "100%",
    overflow: "hidden",
    marginBottom: 8,
    transform: [{ scale: 1 }],
  },
  tipTagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 16,
  },
  tipTagItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 8,
    height: 24,
    backgroundColor: colors.black,
    marginRight: 8,
  },
  tipText: {
    fontSize: 14,
    marginStart: 4,
    color: colors.laheluWhite,
    fontFamily: fonts.openSans,
  },
  chipText: {
    fontSize: 14,
    color: colors.laheluWhite,
    fontFamily: fonts.openSansBold,
  },
  actionRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    zIndex: 0,
  },
  niceBadContainer: {
    borderRadius: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.code3C3D37,
  },
  likeButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  dislikeButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  commentButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.code3C3D37,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  share2IconStyle: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.code3C3D37,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  actionTextStyle: {
    fontSize: 14,
    marginLeft: 6,
    color: colors.laheluWhite,
    fontFamily: fonts.openSansBold,
  },
  flexSpacer: {
    flex: 1,
  },
  playIconOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderStyle: {
    width: "100%",
    height: 0,
    position: "absolute",
    bottom: 0,
  },
  muteButtonStyle: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
  },
});
