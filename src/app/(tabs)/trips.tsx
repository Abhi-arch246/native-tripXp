import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

import TripCard from "@/src/components/trip/TripCard";
import trips from "@assets/data/Trips";

export interface Trip {
  id: number;
  title: string;
  location: string;
  duration: string;
  date: string; // January, February, etc.
  price: number;
  totalCost: number;
  image: string;
}

const MONTHS: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

// Ex: "21 December 2025"
const parseDate = (dateString: string) => {
  const parts = dateString.split(" "); // ["21", "December", "2025"]

  const day = parseInt(parts[0]); // 21  (ignored for sorting)
  const month = parts[1]; // "December"
  const year = parseInt(parts[2]); // 2025

  return { day, month, year };
};

const extractMonthLabel = (dateString: string) => {
  const [, month, year] = dateString.split(" ");
  return `${month} ${year}`; // "December 2025"
};

const groupTripsByMonth = (trips: Trip[]): any => {
  const map: Record<string, Trip[]> = {};

  trips.forEach((trip) => {
    const monthLabel = extractMonthLabel(trip.date);
    if (!map[monthLabel]) map[monthLabel] = [];
    map[monthLabel].push(trip);
  });

  return Object.keys(map)
    .sort((a, b) => {
      const A = parseDate("1 " + a); // convert "December 2025" → "1 December 2025"
      const B = parseDate("1 " + b);

      // Sort by year descending
      if (B.year !== A.year) return B.year - A.year;

      // Same year → month descending
      return MONTHS[B.month] - MONTHS[A.month];
    })
    .flatMap((month) => [
      { type: "header", month },
      ...map[month].map((trip) => ({ type: "trip", trip })),
    ]);
};

export default function Trips() {
  const groupedData = groupTripsByMonth(trips);
  const theme = useTheme();

  const fabColor = theme.dark ? "#4169E1" : "#6A8EFA";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trips</Text>

      <FlatList
        data={groupedData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) =>
          item.type === "header" ? (
            <Text style={styles.monthHeader}>{item.month}</Text>
          ) : (
            <TripCard trip={item.trip} />
          )
        }
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.fab, { backgroundColor: fabColor }]}
        onPress={() => router.push("/addtrip")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="airplane-ticket" size={30} color="#fff" />
          <Text style={styles.fabText}>Add Trip</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 20,
  },
  listContainer: {
    gap: 15,
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  monthHeader: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 15,
  },
  fab: {
    position: "absolute",
    right: 25,
    bottom: 35,
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 18,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  fabText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
});
