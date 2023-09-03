import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors, { CssColors } from "../../constants/Colors";
import React from "react";
import { SvgUri } from "react-native-svg";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const HeaderProps = {
  headerStyle: {
    backgroundColor: CssColors.purple, // Change the background color of the header
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // const img = require('C:/Users/geras/OneDrive/Desktop/Muvi-Mobile/assets/icons/cinemaIcon.svg')
  // console.log('-----------', img)
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CssColors.white,
        tabBarActiveBackgroundColor: CssColors.purple,
        tabBarInactiveBackgroundColor: CssColors.black,
        tabBarInactiveTintColor: CssColors.purple,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Кино",
          tabBarIcon: ({ color }) => (
            <SvgUri
              width="28"
              height="28"
              uri={"https://www.svgrepo.com/show/422437/cinema-film-movie.svg"}
            />
          ),
          ...HeaderProps,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Поиск",
          tabBarIcon: ({ color }) => (
            <SvgUri
              width="28"
              height="28"
              uri={
                "https://www.svgrepo.com/show/422405/find-glass-interface.svg"
              }
            />
          ),
          ...HeaderProps,
        }}
      />
      <Tabs.Screen
        name="marked"
        options={{
          title: "Отмечено",
          tabBarIcon: ({ color }) => (
            <SvgUri
              width="28"
              height="28"
              uri={
                "https://www.svgrepo.com/show/422427/ecommerce-interface-label.svg"
              }
            />
          ),
          ...HeaderProps,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Настройки",
          tabBarIcon: ({ color }) => (
            <SvgUri
              width="28"
              height="28"
              uri={
                "https://www.svgrepo.com/show/422399/configuration-gear-multimedia.svg"
              }
            />
          ),
          ...HeaderProps,
        }}
      />
    </Tabs>
  );
}
