import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Join the Circle</Text>
            <View style={styles.accentLine} />
            <Text style={styles.subtitle}>
              Create an account for early access to collections and personalized suggestions.
            </Text>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>FULL NAME</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter your name" 
                placeholderTextColor="#A0A0A0"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <TextInput 
                style={styles.input} 
                placeholder="rehan@example.com" 
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput 
                style={styles.input} 
                placeholder="••••••••" 
                placeholderTextColor="#A0A0A0"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Actions */}
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.primaryButton}>
              <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryAction}>
              <Text style={styles.secondaryText}>
                Already have an account? <Text style={styles.boldText}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#F8F8F7",
  black: "#1A1A1A",
  gold: "#AF9461",
  textSecondary: "#8E8E8E",
  border: "#E0E0E0"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 35,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontFamily: "serif",
    color: COLORS.black,
    marginBottom: 15,
  },
  accentLine: {
    width: 40,
    height: 1,
    backgroundColor: COLORS.gold,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  form: {
    gap: 35, // Spacious gaps between inputs
  },
  inputGroup: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 10,
  },
  label: {
    fontSize: 10,
    letterSpacing: 2,
    color: COLORS.gold,
    fontWeight: "700",
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    color: COLORS.black,
    paddingVertical: 5,
  },
  footer: {
    marginTop: 60,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: COLORS.black,
    width: "100%",
    paddingVertical: 20,
    borderRadius: 2,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 3,
  },
  secondaryAction: {
    padding: 10,
  },
  secondaryText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    letterSpacing: 0.5,
  },
  boldText: {
    color: COLORS.black,
    fontWeight: "700",
  }
});