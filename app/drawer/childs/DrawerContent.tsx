import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles/DrawerContentStyles";
import {
  CircleDollarSignIcon,
  ListIcon,
  ListTodoIcon,
  MailIcon,
  MedalIcon,
  ShieldPlusIcon,
  TrophyIcon,
} from "lucide-react-native";
import { colors } from "../../../constants/Colors";
import { DrawerItem } from "./DrawerItem";
import { TextMain } from "../../../components/TextMain";
import { DrawerExploreItem, DrawerExploreItemProps } from "./DrawerExploreItem";
import { TouchableMain } from "../../../components/TouchableMain";
import { menus } from "../../../constants/Menus";
import { texts } from "../../../constants/Texts";

type DrawerContentProps = {
  exploreMenus: DrawerExploreItemProps[];
  onPressMenu: (menu: string) => void;
  onPressExplore: (id: string) => void;
};

export const DrawerContent = ({
  exploreMenus,
  onPressMenu,
  onPressExplore,
}: DrawerContentProps) => {
  return (
    <ScrollView
      style={styles.drawerContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TouchableMain style={styles.loginContainer}>
        <TextMain style={styles.loginMainText}>Mau bikin meme?</TextMain>
        <TextMain style={styles.loginSubText}>
          Login dengan Google sekarang!
        </TextMain>
        <TouchableMain style={styles.customButton}>
          <TextMain style={styles.buttonText}>Login</TextMain>
        </TouchableMain>
      </TouchableMain>
      <TextMain style={styles.sectionTitle}>{texts.jelajah}</TextMain>
      <DrawerItem
        menu={menus.laheluPlus}
        icon={<ShieldPlusIcon size={16} color={colors.laheluWhite} />}
        onPress={onPressMenu}
      />
      <DrawerItem
        menu={menus.koin}
        icon={<CircleDollarSignIcon size={16} color={colors.laheluWhite} />}
        onPress={onPressMenu}
      />
      <DrawerItem
        menu={menus.peringkat}
        icon={<TrophyIcon size={16} color={colors.laheluWhite} />}
        onPress={onPressMenu}
      />
      <DrawerItem
        menu={menus.medali}
        icon={<MedalIcon size={16} color={colors.laheluWhite} />}
        onPress={onPressMenu}
      />
      <View style={styles.spacer} />
      <TextMain style={styles.sectionTitle}>{texts.telusuri}</TextMain>
      {exploreMenus.map((exploreMenu) => (
        <DrawerExploreItem
          key={exploreMenu.id}
          {...exploreMenu}
          onPressExplore={onPressExplore}
        />
      ))}
      <View style={styles.spacer} />
      <TextMain style={styles.sectionTitle}>{texts.information}</TextMain>
      <View style={styles.infoContainer}>
        <DrawerItem
          menu={menus.contactUs}
          icon={<MailIcon size={16} color={colors.laheluWhite} />}
          onPress={onPressMenu}
        />
        <DrawerItem
          menu={menus.rule}
          icon={<ListTodoIcon size={16} color={colors.laheluWhite} />}
          onPress={onPressMenu}
        />
        <DrawerItem
          menu={menus.tnc}
          icon={<ListIcon size={16} color={colors.laheluWhite} />}
          onPress={onPressMenu}
        />
        <DrawerItem
          menu={menus.policy}
          icon={<ListIcon size={16} color={colors.laheluWhite} />}
          onPress={onPressMenu}
        />
        <DrawerItem
          menu={menus.laheluPlusPolicy}
          icon={<ShieldPlusIcon size={16} color={colors.laheluWhite} />}
          onPress={onPressMenu}
        />
        <DrawerItem
          menu={menus.coinPolicy}
          icon={<CircleDollarSignIcon size={16} color={colors.laheluWhite} />}
          onPress={onPressMenu}
        />
      </View>
    </ScrollView>
  );
};
