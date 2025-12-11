import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from "react-native";

type EmojiPickerProps = {
  value: string;
  onChange: (emoji: string) => void;
};

const EMOJIS = [
  "🌍",
  "🌴",
  "✈️",
  "🏖️",
  "🏔️",
  "🗺️",
  "🚗",
  "⛵",
  "🎒",
  "📷",
  "🏕️",
  "🌆",
  "🌄",
];

export default function EmojiPicker({ value, onChange }: EmojiPickerProps) {
  const [visible, setVisible] = useState(false);

  function handleSelect(emoji: string) {
    onChange(emoji);
    setVisible(false);
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.pill}
        onPress={(e: GestureResponderEvent) => setVisible(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.emoji}>{value || "🌍"}</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.sheet}>
            <FlatList
              data={EMOJIS}
              keyExtractor={(item) => item}
              numColumns={4}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.emojiButton}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.emojiLarge}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    padding: 6,
    backgroundColor: "#5d5d5daa",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  emoji: {
    fontSize: 50,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 24,
  },
  sheet: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },
  emojiButton: {
    flex: 1,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  emojiLarge: {
    fontSize: 32,
  },
});
