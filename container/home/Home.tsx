// Generate home page
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity
        onPress={() => console.log("Profile button pressed")}
        style={styles.profileButton}
      >
        <Image
          source={require("../../assets/profilepic.png")}
          resizeMode="contain"
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <Text style={styles.healthWealthText}>Health Wealth</Text>
      <Icon
        name="bell"
        color="#CD835F"
        size={18}
        style={styles.notificationIcon}
        onPress={() => {
          console.log("Notification button pressed");
        }}
      ></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1A434D",
    margin: 20,
  },

  healthWealthText: {
    flex: 3,
    color: "white",
    fontSize: 32,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  profileButton: {
    width: 29,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },

  profileImage: {
    width: 29,
    height: 29,
    borderRadius: 100,
  },

  notificationIcon: {
    paddingTop: 8,
  },
});
