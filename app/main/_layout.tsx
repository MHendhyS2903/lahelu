import React from "react";
import { Tabs } from "expo-router";
import { colors } from "../../constants/Colors";
import {
  BellIcon,
  CirclePlusIcon,
  HomeIcon,
  UserCircle,
  Users,
} from "lucide-react-native";
import { main } from "../../constants/Pages";

export default function _layout() {
  return (
    <Tabs
      initialRouteName={main.home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.background,
        },
      }}
    >
      <Tabs.Screen
        name={main.home}
        options={{
          tabBarIcon: ({ size }) => (
            <HomeIcon size={size} color={colors.laheluWhite} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.topic}
        options={{
          tabBarIcon: ({ size }) => (
            <Users size={size} color={colors.laheluWhite} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.upload}
        options={{
          tabBarIcon: ({ size }) => (
            <CirclePlusIcon size={size} color={colors.laheluWhite} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.notification}
        options={{
          tabBarIcon: ({ size }) => (
            <BellIcon size={size} color={colors.laheluWhite} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.profile}
        options={{
          tabBarIcon: ({ size }) => (
            <UserCircle size={size} color={colors.laheluWhite} />
          ),
        }}
      />
    </Tabs>
  );
}
