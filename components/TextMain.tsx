import { fonts } from "../constants/Fonts";
import { Text, TextProps } from "react-native";

export function TextMain({ style, ...rest }: TextProps) {
  return (
    <Text
      style={[{ fontFamily: fonts.openSans, letterSpacing: 0 }, style]}
      {...rest}
    />
  );
}