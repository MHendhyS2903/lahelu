import { NavigationContainer } from "@react-navigation/native";
import React, { useMemo } from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { header } from "../../../constants/Pages";
import ForYouTab from "./ForYouTab";
import FreshTab from "./FreshTab";
import ViralTab from "./viralTab";
import { styles } from "./styles/_layoutStyles";
import { colors } from "../../../constants/Colors";

export default function _layout() {
  const Tab = createMaterialTopTabNavigator();

  const screenOptions: MaterialTopTabNavigationOptions = useMemo(
    () => ({
      swipeEnabled: false,
      tabBarScrollEnabled: false,
      tabBarActiveTintColor: colors.laheluBlue,
      tabBarInactiveTintColor: colors.codeE4E4E4,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
    }),
    [],
  );

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={header.forYouTab} component={ForYouTab} />
        <Tab.Screen name={header.freshTab} component={FreshTab} />
        <Tab.Screen name={header.viralTab} component={ViralTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
