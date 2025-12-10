import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { Text, useTheme } from "react-native-paper";

const TripCard = ({ trip }: any) => {
  const theme = useTheme();
  const cardColor = theme.dark ? "#292929ff" : "#eae3e3ff";
  const locationColor = theme.dark ? "#eae3e3ff" : "#212121";
  return (
    <Link style={{ width: "100%", alignItems: "center" }} href={"/trip"}>
      <View style={[styles.tripContainer, { backgroundColor: cardColor }]}>
        <Image style={styles.tripImage} source={{ uri: trip.image }} />
        <View style={styles.tripDetails}>
          <Text style={[styles.locationText, { color: locationColor }]}>
            {trip.location}
          </Text>
          <Text>
            {trip.price} - {trip.duration}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  tripContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    borderRadius: 18,
    padding: 10,
  },
  tripDetails: {
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  tripImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {
    fontWeight: 600,
    fontSize: 20,
  },
});

export default TripCard;
