import TripCard from "@/src/components/trip/TripCard";
import trips from "@assets/data/Trips";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Trips() {
  return (
    <View style={styles.tripsContainer}>
      <Text style={styles.tripsText}>Trips</Text>
      <FlatList
        data={trips}
        renderItem={({ item }) => <TripCard trip={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tripsContainer: {
    marginTop: 30,
    marginBottom: 70,
  },
  tripsText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
