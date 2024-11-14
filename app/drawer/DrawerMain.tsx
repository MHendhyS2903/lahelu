import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { MenuIcon, SearchIcon } from "lucide-react-native";
import { styles } from "./styles/DrawerStyles";
import { colors } from "../../constants/Colors";
import { Image } from "expo-image";
import { DrawerContent } from "./childs/DrawerContent";
import { useDrawerState } from "./useDrawerState";
import { useDrawerAction } from "./useDrawerAction";
import { TouchableMain } from "../../components/TouchableMain";
import { pageName } from "../../constants/Pages";
import { Drawer } from "expo-router/drawer";

export const DrawerMain = () => {
  const exploreMenus = useDrawerState((state) => state.exploreMenus);

  const { onPressMenu, onPressExplore } = useDrawerAction();

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeAreaStyle}>
        <Drawer
          drawerContent={() => (
            <DrawerContent
              exploreMenus={exploreMenus}
              onPressMenu={onPressMenu}
              onPressExplore={onPressExplore}
            />
          )}
          screenOptions={({ navigation }) => ({
            drawerStyle: styles.drawerStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => (
              <TouchableMain
                onPress={() => navigation.toggleDrawer()}
                style={styles.menuIconStyle}
              >
                <MenuIcon size={20} color={colors.laheluWhite} />
              </TouchableMain>
            ),
            headerTitle: () => (
              <Image
                source={require("../../assets/images/lahelu.png")}
                style={styles.logoStyle}
                contentFit="contain"
              />
            ),
            headerRight: () => (
              <TouchableMain style={styles.searchIconStyle}>
                <SearchIcon size={20} color={colors.laheluWhite} />
              </TouchableMain>
            ),
          })}
        >
          <Drawer.Screen name={pageName.main} />
          <Drawer.Screen name={pageName.blank} />
        </Drawer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
