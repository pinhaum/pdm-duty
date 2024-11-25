import { StyleSheet, View, Text, Linking, Pressable } from "react-native";
import React from "react";
// import HeaderWithTitle from "app/components/HeaderWithTitle";

export default function About() {
  // TODO: get version from package.json
  // TODO: get author name from package.json
  // TODO: double check the layout

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About: App Version 1.0 PDM</Text>
      <Text style={styles.text}>Developed by Gabriel Ramos</Text>
      <Pressable onPress={() => Linking.openURL("https://github.com/pinhaum")}>
        <Text style={styles.text}>Developer Github</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});
