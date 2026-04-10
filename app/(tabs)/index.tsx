import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router"; // 1. Import the router

export default function LandingScreen() {
  const router = useRouter(); // 2. Initialize the router

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
          WILLIAMS{"\n"}SONOMA
        </Text>

        <Text style={styles.tagline}>
          Shop homes.{"\n"}<Text style={styles.italic}>Not just products.</Text>
        </Text>

        <Text style={styles.subtext}>
          Smart bundles. Real-time suggestions.
        </Text>
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottom}>
        <TouchableOpacity 
          activeOpacity={0.9} 
          style={styles.button}
          onPress={() => router.push("/Home")} // 3. Link to Home.tsx
        >
          <Text style={styles.buttonText}>START SHOPPING     →</Text>
        </TouchableOpacity>
        <Text style={styles.footerLegal}>SINCE 1956 • SONOMA, CALIFORNIA</Text>
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#F8F8F7",
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
    paddingHorizontal: 35,
  },
  accentLine: {
    width: 30,
    height: 1,
    backgroundColor: COLORS.gold,
    marginBottom: 25,
  },
  brand: {
    fontSize: 36,
    letterSpacing: 8,
    color: COLORS.black,
    fontFamily: "serif",
    marginBottom: 40,
    lineHeight: 48,
  },
  tagline: {
    fontSize: 28,
    lineHeight: 38,
    color: COLORS.black,
    fontFamily: "serif",
    fontWeight: "300",
    marginBottom: 20,
  },
  italic: {
    fontStyle: "italic",
    color: COLORS.gold,
  },
  subtext: {
    fontSize: 13,
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  bottom: {
    paddingHorizontal: 25,
    paddingBottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.black,
    width: '100%',
    paddingVertical: 20,
    borderRadius: 2,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  footerLegal: {
    marginTop: 20,
    fontSize: 9,
    letterSpacing: 2,
    color: COLORS.textSecondary,
  }
});