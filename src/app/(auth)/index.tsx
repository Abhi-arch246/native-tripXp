import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const AuthIndex = () => {
  return <Redirect href="/(onboarding)/first-screen" />;
};

export default AuthIndex;
