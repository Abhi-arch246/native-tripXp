import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function Trips() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.tripsText}>Trips</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tripsText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
