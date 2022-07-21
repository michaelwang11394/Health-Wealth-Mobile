import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function GraphSection() {
  return (
    <View style={styles.graphContainer}>
      <Text style={styles.graphText}>Earned</Text>
      <Text style={styles.graphNumber}>$5.85</Text>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [0.2, 1.4, 3.5, 4.15, 4.35, 5.85],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={160}
        withShadow={false}
        withInnerLines={false}
        withOuterLines={false}
        withHorizontalLines={false}
        withHorizontalLabels={true}
        yAxisLabel="$"
        yAxisInterval={2} // optional, defaults to 1
        onDataPointClick={(data) => console.log(data)}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => "orange",
          labelColor: (opacity = 1) => "gray",
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: "white",
          },
          useShadowColorFromDataset: true, // optional
          strokeWidth: 2,
        }}
        style={{
          marginVertical: 2,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    flex: 1,
    flexDirection: "column",
    margin: "auto",
  },
  graphNumber: {
    fontSize: 32,
    fontWeight: "500",
    marginLeft: 8,
  },
  graphText: {
    fontFamily: "Ariel",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 8,
    marginTop: 8,
  },
});
