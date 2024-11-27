import { View, Text, Button } from "react-native";
import React from "react";
import { router, usePathname } from "expo-router";
import { useActionSheet } from "@expo/react-native-action-sheet";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function HamburguerMenu() {
  const { showActionSheetWithOptions } = useActionSheet();

  const pathname = usePathname();
  const onPress = () => {
    const options = pathname === "/home" ? ["About", "Logout"] : ["Logout"];
    const navigationButtonIndex = pathname === "/home" ? 0 : undefined;
    const destructiveButtonIndex = options.length - 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: navigationButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case navigationButtonIndex:
            router.push("about");
            break;

          case destructiveButtonIndex:
            router.dismissAll();
            break;
        }
      }
    );
  };

  return (
    <View>
      <FontAwesome6 name="bars" size={24} color="black" onPress={onPress} />
    </View>
  );
}
