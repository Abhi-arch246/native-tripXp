import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function Friends() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.friendsText}>Friends</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  friendsText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
