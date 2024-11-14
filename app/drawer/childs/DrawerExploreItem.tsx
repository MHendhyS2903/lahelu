import React from "react";
import { View } from "react-native";
import { styles } from "../styles/DrawerExploreItemStyles";
import { TextMain } from "../../../components/TextMain";
import { Image } from "expo-image";
import { TouchableMain } from "../../../components/TouchableMain";

export type DrawerExploreItemProps = {
  id: string;
  imgUrl: string;
  text: string;
  activedMenu?: string;
  onPressExplore?: (id: string) => void;
};

export const DrawerExploreItem = ({
  id,
  imgUrl,
  text,
  onPressExplore,
}: DrawerExploreItemProps) => {
  return (
    <TouchableMain onPress={() => onPressExplore?.(id)}>
      <View style={styles.container}>
        <Image source={{ uri: imgUrl }} style={styles.imageStyle} />
        <TextMain style={styles.textStyle}>{text}</TextMain>
        <View style={styles.spacer} />
      </View>
    </TouchableMain>
  );
};
