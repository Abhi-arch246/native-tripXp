import { Image, StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { Text, Card } from "react-native-paper";
import { useLocalSearchParams, Stack } from "expo-router";
import trips from "@assets/data/Trips";

const Trip = () => {
  const { id }: any = useLocalSearchParams();
  const trip = trips.find((t) => t.id.toString() === id);

  if (!trip) return <Text>Trip not found</Text>;

  const expenses = [
    { id: 1, title: "Lunch", amount: 450, date: "2025-01-12" },
    { id: 2, title: "Taxi", amount: 900, date: "2025-01-12" },
    { id: 3, title: "Museum Tickets", amount: 900, date: "2025-01-12" },
    { id: 4, title: "Breakfast", amount: 180, date: "2025-01-11" },
    { id: 5, title: "Metro Pass", amount: 400, date: "2025-01-11" },
    { id: 6, title: "Metro Pass", amount: 400, date: "2025-01-11" },
    { id: 7, title: "Metro Pass", amount: 400, date: "2025-01-11" },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const groupByDate = (data: any[]) => {
    const map: any = {};

    data.forEach((item) => {
      if (!map[item.date]) map[item.date] = [];
      map[item.date].push(item);
    });

    return Object.keys(map)
      .sort((a, b) => (a < b ? 1 : -1)) // latest top
      .map((date) => ({
        date: formatDate(date),
        total: map[date].reduce((sum: any, i: any) => sum + i.amount, 0),
        items: map[date],
      }));
  };

  const grouped = groupByDate(expenses);

  return (
    <FlatList
      data={grouped}
      keyExtractor={(item) => item.date}
      contentContainerStyle={{
        paddingBottom: 40,
        marginHorizontal: 20,
        marginTop: 60,
      }}
      ListHeaderComponent={
        <View style={{ marginBottom: 30 }}>
          {/* HEADER SECTION */}
          <View style={styles.headerSection}>
            <Image style={styles.heroImage} source={{ uri: trip.image }} />
            <Text style={styles.tripName}>{trip.location}</Text>
            <Text>{trip.date}</Text>
          </View>

          <View style={styles.row}>
            {/* Card 1 */}
            <Card style={styles.miniCard}>
              <Card.Content>
                <Text style={styles.infoLabel}>Trip Cost</Text>
                <Text style={styles.infoValue}>{trip.totalCost}</Text>
              </Card.Content>
            </Card>

            {/* Card 2 */}
            <Card style={styles.miniCard}>
              <Card.Content>
                <Text style={styles.infoLabel}>Your Cost</Text>
                <Text style={styles.infoValue}>{trip.price}</Text>
              </Card.Content>
            </Card>

            {/* Card 2 */}
            <Card style={styles.miniCard}>
              <Card.Content>
                <Text style={styles.infoLabel}>Duration</Text>
                <Text style={styles.infoValue}>{trip.duration}</Text>
              </Card.Content>
            </Card>

            {/* Card 3 */}
            <Card style={styles.miniCard}>
              <Card.Content>
                <Text style={styles.infoLabel}>People</Text>
                <Text style={styles.infoValue}>{4}</Text>
              </Card.Content>
            </Card>
          </View>
        </View>
      }
      renderItem={({ item }) => (
        <View
          style={{
            marginBottom: 20,
            borderColor: "#fff",
            borderWidth: 1,
            borderRadius: 16,
            padding: 5,
          }}
        >
          {/* Date Header */}
          <View style={styles.dateHeader}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.totalText}>₹{item.total}</Text>
          </View>

          {/* Expenses List */}
          {item.items.map((expense: any) => (
            <View key={expense.id} style={styles.expenseRow}>
              <Text style={styles.expenseTitle}>{expense.title}</Text>
              <Text style={styles.expenseAmount}>₹{expense.amount}</Text>
            </View>
          ))}
        </View>
      )}
    />
  );
};

export default Trip;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
  },

  headerSection: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  heroImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },

  tripName: {
    fontSize: 24,
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  miniCard: {
    width: "24%",
    alignItems: "center",
  },

  infoCard: {
    marginBottom: 25,
    paddingVertical: 2,
    borderRadius: 16,
  },

  infoLabel: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 2,
  },

  infoValue: {
    fontSize: 18,
    fontWeight: "600",
    alignContent: "center",
  },

  divider: {
    marginVertical: 8,
  },

  expenseCard: {
    borderRadius: 16,
    paddingVertical: 10,
  },

  expenseDate: {
    fontSize: 16,
    fontWeight: "500",
  },

  dateHeader: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  expenseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  expenseTitle: {
    fontSize: 15,
  },
  expenseAmount: {
    fontSize: 15,
    fontWeight: "600",
  },
});
