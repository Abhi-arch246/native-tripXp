import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import EmojiPicker from "./components/EmojiPicker";
import { Stack } from "expo-router";
import PrimaryButton from "@components/ui/Buttons/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AddTripScreen() {
  const theme = useTheme();
  const [tripEmoji, setTripEmoji] = useState("🌍");
  const [tripName, setTripName] = useState("");
  const [members, setMembers] = useState("1");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const handleCreateTrip = () => {
    console.log("Trip Created:", {
      tripEmoji,
      tripName,
      members,
      fromDate,
      toDate,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Create a New Trip" }} />

      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        extraScrollHeight={100} // pushes the focused input above keyboard
        keyboardOpeningTime={0} // fixes slow scroll on Android
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 10 }}
      >
        <Text style={styles.screenTitle}>Create a New Trip</Text>

        {/* Emoji Picker */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <EmojiPicker value={tripEmoji} onChange={setTripEmoji} />
        </View>

        {/* Trip Name */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Trip Name</Text>
          <TextInput
            style={[styles.input, { color: theme.colors.onSurface }]}
            placeholder="Ex: Goa Trip"
            placeholderTextColor="#888"
            value={tripName}
            onChangeText={setTripName}
          />
        </View>

        {/* Members */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Number of Members</Text>
          <TextInput
            style={[styles.input, { color: theme.colors.onSurface }]}
            placeholder="Ex: 4"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={members}
            onChangeText={setMembers}
          />
        </View>

        {/* From Date */}
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

        {/* To Date */}
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

        {/* Notes */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Notes (Optional)</Text>
          <TextInput
            style={[styles.notesInput, { color: theme.colors.onSurface }]}
            placeholder="Add any notes about your trip..."
            placeholderTextColor="#888"
            multiline
          />
        </View>

        <PrimaryButton
          title="Create Trip"
          onPress={handleCreateTrip}
          style={{ marginTop: 20 }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 10,
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
});
