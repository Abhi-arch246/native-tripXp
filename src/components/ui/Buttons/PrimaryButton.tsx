import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

const PrimaryButton: React.FC<Props> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4169E1",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PrimaryButton;
