import { Text, View, StyleSheet, Linking, Pressable } from "react-native";
import React, { Component } from "react";

import packageJson from "@/package.json";

export default class DeveloperInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          App Version{" "}
          <Text style={{ fontWeight: "bold" }}>{packageJson.version}</Text>
        </Text>
        <Text style={styles.text}>
          Developed by{" "}
          <Text style={{ fontWeight: "bold" }}>{packageJson.author.name}</Text>
        </Text>
        <Pressable
          onPress={() => Linking.openURL("https://github.com/pinhaum")}
        >
          <Text style={styles.text}>
            Developer <Text style={styles.highlightedText}>Github</Text>
          </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    paddingTop: 5,
  },
  highlightedText: {
    fontWeight: "bold",
    color: "#007AFF",
  },
});
