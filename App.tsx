import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./container/home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Home />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1A434D",
    alignItems: "center",
  },

  header: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  chart: {
    flex: 2,
    backgroundColor: "black",
  },

  tasks: {
    flex: 2,
    backgroundColor: "white",
  },
});
