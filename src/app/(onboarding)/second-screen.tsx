import React from "react";
import { useRouter } from "expo-router";
import OnBoardingScreen from "../components/OnBoardingScreen";
import SecondScreenImage from "../../../assets/svgs/SecondScreen.svg";

const SecondScreenOnboarding = () => {
  const router = useRouter();

  return (
    <OnBoardingScreen
      title="Track Every Trip Expense"
      description="Add expenses, split costs instantly, and know exactly who owes what—no confusion, no manual calculations"
      Illustration={SecondScreenImage}
      onNext={() => router.replace("/(auth)/sign-in")}
      index={1}
      total={2}
      onSkip={() => router.replace("/(auth)/sign-in")}
    />
  );
};

export default SecondScreenOnboarding;
