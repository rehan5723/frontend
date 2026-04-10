import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StatusBar,
  Animated,
  PanResponder,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  const categories = ["Sofa", "Kitchen", "Decor", "Lighting", "Outdoor"];

  const products = [
    { name: "Minimal Chair", price: "₹7,999", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400" },
    { name: "Ceramic Vase", price: "₹2,499", img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400" },
    { name: "Pendant Light", price: "₹5,299", img: "https://images.unsplash.com/photo-1543055868-96bbbf829d67?q=80&w=400" },
    { name: "Oak Table", price: "₹12,499", img: "https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=400" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>WILLIAMS SONOMA</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="#999" />
          <TextInput
            placeholder="Search luxury collection..."
            placeholderTextColor="#999"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* CATEGORIES */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
          {categories.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.category, i === 0 && styles.categoryActive]}
            >
              <Text style={[styles.categoryText, i === 0 && styles.categoryTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* HERO */}
        <View style={styles.hero}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>THE CLOUD</Text>
            <Text style={styles.heroSub}>Spring Collection 2026</Text>
          </View>
        </View>

        {/* PRODUCTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((product, i) => {

              const rotateX = useRef(new Animated.Value(0)).current;
              const rotateY = useRef(new Animated.Value(0)).current;
              const scale = useRef(new Animated.Value(1)).current;

              const panResponder = useRef(
                PanResponder.create({
                  onStartShouldSetPanResponder: () => true,

                  onPanResponderGrant: () => {
                    Animated.spring(scale, {
                      toValue: 1.05,
                      useNativeDriver: true,
                    }).start();
                  },

                  onPanResponderMove: (e, g) => {
                    rotateY.setValue(g.dx / 20);
                    rotateX.setValue(-g.dy / 20);
                  },

                  onPanResponderRelease: () => {
                    Animated.parallel([
                      Animated.spring(rotateX, { toValue: 0, useNativeDriver: true }),
                      Animated.spring(rotateY, { toValue: 0, useNativeDriver: true }),
                      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
                    ]).start();
                  },
                })
              ).current;

              const rx = rotateX.interpolate({
                inputRange: [-10, 10],
                outputRange: ["-10deg", "10deg"],
              });

              const ry = rotateY.interpolate({
                inputRange: [-10, 10],
                outputRange: ["-10deg", "10deg"],
              });

              return (
                <View key={i} {...panResponder.panHandlers}>
                  <Animated.View
                    style={[
                      styles.card,
                      {
                        transform: [
                          { perspective: 1000 },
                          { rotateX: rx },
                          { rotateY: ry },
                          { scale },
                        ],
                      },
                    ]}
                  >
                    <Image source={{ uri: product.img }} style={styles.cardImage} />
                    <Text style={styles.cardName}>{product.name}</Text>
                    <Text style={styles.cardPrice}>{product.price}</Text>
                  </Animated.View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* 🔥 APPLE NAVBAR */}
      <View style={styles.nav}>
        {[
          { name: "home" as const, key: "home" },
          { name: "compass" as const, key: "explore" },
          { name: "heart" as const, key: "wishlist" },
          { name: "user" as const, key: "profile" },
        ].map((item) => (
          <TouchableOpacity key={item.key} onPress={() => setActiveTab(item.key)} style={styles.navItem}>
            <Feather
              name={item.name}
              size={22}
              color={activeTab === item.key ? "#000" : "#999"}
            />
            <View style={[styles.dot, activeTab === item.key && styles.dotActive]} />
          </TouchableOpacity>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: { padding: 20 },
  logo: { fontSize: 14, letterSpacing: 4, fontWeight: "800" },

  searchWrapper: { paddingHorizontal: 20, marginBottom: 10 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 40,
  },
  searchInput: { marginLeft: 10, flex: 1 },

  categoryRow: { paddingLeft: 20, marginVertical: 10 },
  category: {
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryActive: { backgroundColor: "#000" },
  categoryText: { color: "#666" },
  categoryTextActive: { color: "#fff" },

  hero: { height: 300, margin: 20, borderRadius: 20, overflow: "hidden" },
  heroImage: { width: "100%", height: "100%" },
  heroOverlay: { position: "absolute", bottom: 20, left: 20 },
  heroTitle: { color: "#fff", fontSize: 22, fontWeight: "700" },
  heroSub: { color: "#fff", fontSize: 12 },

  section: { marginTop: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginLeft: 20, marginBottom: 10 },

  card: {
    width: 180,
    marginLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },
  cardImage: { height: 180, borderRadius: 15 },
  cardName: { marginTop: 10, fontWeight: "600" },
  cardPrice: { color: "#666" },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderTopWidth: 0.5,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  navItem: { alignItems: "center" },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 2,
    marginTop: 5,
    opacity: 0,
  },
  dotActive: { opacity: 1 },
});