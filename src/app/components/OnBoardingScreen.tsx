import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import PrimaryButton from "@/src/components/ui/Buttons/PrimaryButton";

type Props = {
  title: string;
  Illustration: React.ComponentType<any>;
  description: string;
  onNext: () => void;
  onSkip: () => void;
  index: number; // 0-based
  total: number;
};

const OnBoardingScreen = ({
  title,
  Illustration,
  description,
  onNext,
  onSkip,
  index,
  total,
}: Props) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={onSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Illustration width={280} height={280} />
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.dotsContainer}>
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: theme.dark ? "#fff" : "212121" },
              i === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
      <PrimaryButton
        style={styles.nextButton}
        title={index === total - 1 ? "Get Started" : "Next"}
        onPress={onNext}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  skip: {
    position: "absolute",
    top: 50,
    right: 24,
  },
  skipText: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.7,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 50,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 30,
    marginHorizontal: 35,
    marginVertical: 10,
    lineHeight: 22,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#262B6E",
    width: 18,
  },
  nextButton: {
    width: "80%",
    marginTop: 10,
  },
});
