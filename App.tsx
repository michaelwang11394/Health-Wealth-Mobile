import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./container/home/Home";
import React from "react";
import Graph from "./container/home/Graph";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Home />
      </View>
      <View style={styles.graphSection}>
        <Graph />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  headerSection: {
    flex: 1,
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#1A434D",
  },

  graphSection: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
  },

  tasks: {
    flex: 2,
    backgroundColor: "white",
  },
});
