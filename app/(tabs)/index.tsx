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

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity><Text style={styles.icon}>🔍</Text></TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.icon}>🛒</Text>
            <View style={styles.dot} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Center Content */}
      <View style={styles.content}>
        <View style={styles.accentLine} />
        
        <Text style={styles.brand}>
          Williams{"\n"}<Text style={styles.cursiveBrand}>Sonoma</Text>
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
        <Text style={styles.footerLegal}>SINCE 1956 • SONOMA, CALIFORNIA</Text>
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#FDFDFB", // Brighter, cleaner paper-white
  gold: "#AF9461",
  black: "#1A1A1A",
  textSecondary: "#8E8E8E",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingTop: 20,
    gap: 25,
  },
  icon: {
    fontSize: 20,
    color: COLORS.black,
  },
  dot: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.gold,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  accentLine: {
    width: 40,
    height: 1,
    backgroundColor: COLORS.gold,
    marginBottom: 30,
  },
  brand: {
    fontSize: 48, // Slightly larger
    color: COLORS.black,
    fontFamily: "serif",
    marginBottom: 40,
    lineHeight: 52,
    fontWeight: "300",
  },
  cursiveBrand: {
    fontStyle: "italic", // Creates the cursive luxury feel
    color: COLORS.gold,
    fontWeight: "400",
  },
  quoteContainer: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.gold,
    paddingLeft: 20,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 26,
    lineHeight: 36,
    color: COLORS.black,
    fontFamily: "serif",
    fontWeight: "300",
  },
  cursiveTagline: {
    fontStyle: "italic",
    fontSize: 30, // Cursive looks better slightly larger
    color: COLORS.black,
  },
  subtext: {
    fontSize: 12,
    color: COLORS.textSecondary,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginTop: 10,
  },
  bottom: {
    paddingHorizontal: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.black,
    width: '100%',
    paddingVertical: 18,
    borderRadius: 0, // Sharp edges = higher luxury
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
  footerLegal: {
    marginTop: 25,
    fontSize: 8,
    letterSpacing: 3,
    color: COLORS.textSecondary,
    textTransform: "uppercase",
  }
});