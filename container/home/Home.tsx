// Generate home page
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import GraphSection from "./GraphSection";
import HeaderSection from "./HeaderSection";
import TaskSection from "./TaskSection";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <HeaderSection />
      </View>
      <View style={styles.graphSection}>
        <GraphSection />
      </View>
      <View style={styles.taskSection}>
        <TaskSection />
      </View>
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
    flex: 3.5,
    flexDirection: "row",
    backgroundColor: "white",
  },

  taskSection: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "white",
  },
});
