import React from "react";
import FirstScreenImage from "../../../assets/svgs/FirstScreen.svg";
import OnBoardingScreen from "../components/OnBoardingScreen";
import { useRouter } from "expo-router";

const FirstScreenOnboarding = () => {
  const router = useRouter();

  return (
    <OnBoardingScreen
      title="Travel Together, Stress-Free"
      Illustration={FirstScreenImage}
      description="Create trips, add friends and focus on experiences with Trip XP. Trip smarter with your group"
      onNext={() => router.push("/(onboarding)/second-screen")}
      index={0}
      total={2}
      onSkip={() => router.replace("/(auth)/sign-in")}
    />
  );
};

export default FirstScreenOnboarding;
