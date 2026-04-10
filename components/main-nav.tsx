import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type MainNavProps = {
  activeRoute: "home" | "explore" | "chat" | "profile";
};

const navItems = [
  { key: "home", label: "Home", icon: "home", route: "/Home", iconSet: "feather" },
  { key: "explore", label: "Explore", icon: "compass", route: "/explore", iconSet: "feather" },
  { key: "chat", label: "Assistant", icon: "chatbubble-ellipses-outline", route: "/chatbot", iconSet: "ionicons" },
  { key: "profile", label: "Profile", icon: "user", route: "/profile", iconSet: "feather" },
] as const;

export function MainNav({ activeRoute }: MainNavProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.tab}
          onPress={() => router.push(item.route)}
          activeOpacity={0.8}
        >
          {item.iconSet === "ionicons" ? (
            <Ionicons
              name={item.icon as any}
              size={20}
              color={activeRoute === item.key ? "#AF9461" : "#999"}
            />
          ) : (
            <Feather
              name={item.icon as any}
              size={20}
              color={activeRoute === item.key ? "#000" : "#999"}
            />
          )}
          <Text style={[styles.label, activeRoute === item.key && styles.activeLabel]}>
            {item.label}
          </Text>
          {activeRoute === item.key && <View style={styles.activeDot} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.06)",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  tab: {
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 10,
    color: "#999",
  },
  activeLabel: {
    color: "#000",
    fontWeight: "700",
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#AF9461",
    marginTop: 2,
  },
});
