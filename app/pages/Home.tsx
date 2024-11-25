import { View, Text, Image, StyleSheet, SectionList } from "react-native";
import React from "react";
import data from "../services/exampleData";
import groupByCountry from "../services/groupByCountry";

// TODO: fix styles
// TODO: add header

export default function Home() {
  console.log(JSON.stringify(groupByCountry(data)[0].data[0]));

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <SectionList
        sections={groupByCountry(data)}
        keyExtractor={(item, index) => index.toString() + item.id.toString()}
        renderSectionHeader={({ section: { section, total } }) => (
          <Text style={styles.header}>
            {section}: {total}
          </Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.passenger_avatar }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{item.passenger_name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 50,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
});