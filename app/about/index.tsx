import { StyleSheet, View, Text, Linking, Pressable } from "react-native";
import React from "react";
import HeaderWithTitle from "@/components/HeaderWithTitle";
import HamburguerMenu from "@/components/HamburguerMenu";
import DeveloperInfo from "@/components/DeveloperInfo";

export default function About() {
  // TODO: double check the layout

  return (
    <View style={styles.container}>
      <HeaderWithTitle headerRight={() => <HamburguerMenu />} />
      <DeveloperInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
