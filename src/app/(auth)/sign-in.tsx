import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { supabase } from "@lib/supabase";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const handleGoogleLogin = async () => {
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: "google",
    //   options: {
    //     redirectTo: "exp://localhost:8081",
    //   },
    // });

    router.replace("/(tabs)");

    // if (error) {
    //   console.error("Google login error:", error);
    // }
  };

  return (
    <LinearGradient
      // colors={["#3B5BFF", "#0B1C4D"]}
      colors={[
        "#3F4CFF", // muted blue (not bright)
        "#262B6E", // indigo
        "#120C2E", // violet-black
      ]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.content}>
        <Image
          source={require("@assets/images/hot-air-balloon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Trip XP</Text>
        <Text style={styles.subtitle}>Track your trips & shared expenses</Text>

        <TouchableOpacity
          style={styles.googleBtn}
          onPress={handleGoogleLogin}
          activeOpacity={0.85}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzZGrWXEhw2DGQNLInLj4FNYs-tOq0tsRQA&s",
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          By continuing, you agree to our Terms & Privacy Policy.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    marginTop: 8,
    marginBottom: 32,
    textAlign: "center",
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: "70%",
    marginBottom: 24,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  footer: {
    fontSize: 12,
    color: "rgba(255,255,255,0.6)",
    textAlign: "center",
  },
});
