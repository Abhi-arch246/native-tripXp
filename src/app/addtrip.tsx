import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useTheme, Text } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import EmojiPicker from "./components/EmojiPicker";
import { Stack } from "expo-router";

export default function AddTripScreen() {
  const theme = useTheme();
  const cardColor = theme.dark ? "#292929ff" : "#efefefff";
  const [tripEmoji, setTripEmoji] = useState("🌍");
  const [tripName, setTripName] = useState("");
  const [members, setMembers] = useState("1");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: cardColor }]}>
      <Stack.Screen options={{ title: "Create a New Trip" }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Emoji */}
        <View style={[{ flexDirection: "row", justifyContent: "center" }]}>
          <EmojiPicker value={tripEmoji} onChange={setTripEmoji} />
        </View>

        {/* Trip Name */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Trip Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Goa Trip"
            placeholderTextColor="#888"
            value={tripName}
            onChangeText={setTripName}
          />
        </View>

        {/* Members Count */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Number of Members</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 4"
            placeholderTextColor="#ffffffff"
            keyboardType="numeric"
            value={members}
            onChangeText={setMembers}
          />
        </View>

        {/* Trip From Date */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>From Date</Text>

          <TouchableOpacity
            onPress={() => setShowFromPicker(true)}
            style={styles.dateBox}
          >
            <Text style={styles.dateText}>{fromDate.toDateString()}</Text>
          </TouchableOpacity>

          <DatePickerModal
            locale="en"
            mode="single"
            visible={showFromPicker}
            onDismiss={() => setShowFromPicker(false)}
            date={fromDate}
            onConfirm={({ date }) => {
              setShowFromPicker(false);
              if (date) setFromDate(date);
            }}
          />
        </View>

        {/* Trip To Date */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>To Date</Text>

          <TouchableOpacity
            onPress={() => setShowToPicker(true)}
            style={styles.dateBox}
          >
            <Text style={styles.dateText}>{toDate.toDateString()}</Text>
          </TouchableOpacity>

          <DatePickerModal
            locale="en"
            mode="single"
            visible={showToPicker}
            onDismiss={() => setShowToPicker(false)}
            date={toDate}
            onConfirm={({ date }) => {
              setShowToPicker(false);
              if (date) setToDate(date);
            }}
          />
        </View>

        {/* Additional Notes */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Notes (Optional)</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Add any notes about your trip..."
            placeholderTextColor="#888"
            multiline
          />
        </View>

        {/* Create Trip Button */}
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Trip</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 24,
  },
  inputBlock: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
  },
  inputEmoji: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    fontSize: 24,
  },
  notesInput: {
    height: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    textAlignVertical: "top",
  },
  dateBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
  },
  dateText: {
    fontSize: 16,
  },
  createButton: {
    backgroundColor: "#4169E1",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
