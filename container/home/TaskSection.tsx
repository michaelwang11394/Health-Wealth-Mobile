import { getActionFromState } from "@react-navigation/native";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

type individualTaskProps = {
  task: string;
};
function IndividualTask(props: individualTaskProps) {
  console.log(props.task);

  const getIconName = (task: string) => {
    switch (task) {
      case "25 mins HIIT":
        return "scooter";
      case "Mindfulness":
        return "meditation";
      case "Glucose in Range":
        return "food-turkey";
      case "7.5+ hours sleep":
        return "sleep";
    }
    return "";
  };
  return (
    <View style={styles.individualTaskContainer}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={50}
        tintColor="#1A434D"
        backgroundColor="#9A9A9A"
        padding={4}
        rotation={0}
        onAnimationComplete={() => console.log("onAnimationComplete")}
      >
        {() => (
          <MaterialIcon
            name={getIconName(props.task)}
            color="#CD835F"
            size={36}
            onPress={() => {
              console.log("Notification button pressed"); // make sure this is working
            }}
          ></MaterialIcon>
        )}
      </AnimatedCircularProgress>

      <Text style={styles.RingText}>{props.task}</Text>
    </View>
  );
}

export default function TaskSection() {
  const tasks = [
    "25 mins HIIT",
    "Glucose in Range",
    "7.5+ hours sleep",
    "Mindfulness",
  ];

  return (
    <View style={styles.TaskContainer}>
      <View style={styles.TaskHeader}>
        <Text style={styles.TaskText}> My Tasks </Text>
        <Icon
          name="ios-add-circle"
          color="#CD835F"
          size={30}
          onPress={() => {
            console.log("Notification button pressed"); // make sure this is working
          }}
        ></Icon>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <IndividualTask task={item} />}
        numColumns={2}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TaskContainer: {
    flex: 1,
  },
  TaskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginRight: 8,
  },
  TaskRings: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "auto",
  },
  TaskText: {
    flexDirection: "row",
    fontSize: 24,
    fontWeight: "600",
  },
  filterButtonGroup: {
    flex: 1,
    flexDirection: "row",
  },
  filterButton: {
    width: 29,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },
  RingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  individualTaskContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "auto",
  },
});
