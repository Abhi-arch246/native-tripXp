import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { supabase } from "@lib/supabase";
import { router } from "expo-router";

export default function LoginScreen() {
  const handleGoogleLogin = async () => {
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: "google",
    //   options: {
    //     redirectTo: "exp://localhost:8081",
    //   },
    // });

    router.push("/(tabs)");

    // if (error) {
    //   console.error("Google login error:", error);
    // }
  };

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image
        source={require("@assets/images/ic_launcher-web.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Title */}
      <Text style={styles.title}>Trip XP</Text>
      <Text style={styles.subtitle}>Track your trips & shared expenses</Text>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleLogin}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzZGrWXEhw2DGQNLInLj4FNYs-tOq0tsRQA&s",
          }}
          style={styles.googleIcon}
        />

        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>
        By continuing, you agree to our Terms & Privacy Policy.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e146c",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 40,
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "80%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  footer: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 30,
    width: "80%",
  },
});
