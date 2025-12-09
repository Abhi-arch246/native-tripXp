import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function Profile() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.profileText}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
