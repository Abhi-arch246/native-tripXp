import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // No header for auth screens
        animation: "fade", // Optional: smoother transitions
      }}
    >
      <Stack.Screen name="sign-in" />
    </Stack>
  );
}
