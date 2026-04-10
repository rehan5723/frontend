import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

export default function LandingScreen() {
  const router = useRouter();

  // 🔥 Load Garamond fonts
  const [fontsLoaded] = useFonts({
    "Garamond": require("../../assets/fonts/EBGaramond-Regular.ttf"),
    "Garamond-Italic": require("../../assets/fonts/EBGaramond-Italic.ttf")
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Center Content */}
      <View style={styles.content}>
        <View style={styles.accentLine} />
        
        <Text style={styles.brand}>
          Williams{"\n"}
          <Text style={styles.cursiveBrand}>Sonoma</Text>
        </Text>

        <View style={styles.quoteContainer}>
          <Text style={styles.tagline}>
            “Shop homes.{"\n"}
            <Text style={styles.cursiveTagline}>Not just products.”</Text>
          </Text>
        </View>

        <Text style={styles.subtext}>
          Smart bundles. Real-time suggestions.
        </Text>
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottom}>
        <TouchableOpacity 
          activeOpacity={0.9} 
          style={styles.button}
          onPress={() => router.push("/Home")}
        >
          <Text style={styles.buttonText}>Enter the Collection      →</Text>
        </TouchableOpacity>

        <Text style={styles.footerLegal}>
          SINCE 1956 • SONOMA, CALIFORNIA
        </Text>
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#F7F5F0", // Original warm luxury tone
  gold: "#AF9461",
  black: "#111111",
  textSecondary: "#9A9A9A",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 42,
  },

  accentLine: {
    width: 50,
    height: 1,
    backgroundColor: COLORS.gold,
    marginBottom: 40,
  },

  brand: {
    fontSize: 60,
    color: COLORS.black,
    fontFamily: "Garamond",
    lineHeight: 60,
    letterSpacing: 1,
    marginBottom: 50,
  },

  cursiveBrand: {
    fontFamily: "Garamond-Italic",
    color: COLORS.gold,
    fontSize: 70,
  },

  quoteContainer: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.gold,
    paddingLeft: 22,
    marginBottom: 25,
  },

  tagline: {
    fontSize: 40,
    lineHeight: 50,
    color: COLORS.black,
    fontFamily: "Garamond-Italic",
  },

  cursiveTagline: {
    fontFamily: "Garamond-Italic",
    fontSize: 28,
    letterSpacing: 0.5,
    color: COLORS.black,
  },

  subtext: {
    fontSize: 11,
    color: COLORS.textSecondary,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginTop: 14,
  },

  bottom: {
    paddingHorizontal: 32,
    paddingBottom: 45,
    alignItems: "center",
  },

  button: {
    backgroundColor: COLORS.black,
    width: "100%",
    paddingVertical: 20,
    borderRadius: 0,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 4,
    textTransform: "uppercase",
  },

  footerLegal: {
    marginTop: 28,
    fontSize: 8,
    letterSpacing: 3,
    color: COLORS.textSecondary,
    textTransform: "uppercase",
  },
});