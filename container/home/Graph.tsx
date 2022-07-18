import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Graph() {
  return (
    <View style={styles.graphContainer}>
      <Text style={styles.graphText}>Earned</Text>
      <Text style={styles.graphNumber}>$5.85</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 8,
  },
  graphNumber: {
    fontSize: 32,
    fontWeight: "500",
  },
  graphText: {
    fontFamily: "Ariel",
    fontSize: 18,
    fontWeight: "500",
  },
});
