import React, { useState } from "react";
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
  Platform
} from "react-native";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
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
      
      {/* --- Restored W. SONOMA Luxury Header --- */}
      <View style={styles.solidTopBar}>
         <Text style={styles.logoText}>W. SONOMA</Text>
         <View style={styles.topIcons}>
            <TouchableOpacity style={styles.headerIconCircle}>
                <Text style={styles.topEmoji}>👤</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconCircle}>
                <Text style={styles.topEmoji}>👜</Text>
                <View style={styles.dot} />
            </TouchableOpacity>
         </View>
      </View>

      {/* --- Functional Search Bar --- */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search our luxury collection..."
            placeholderTextColor="#A0A0A0"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dynamic Category Row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.catPill, index === 0 && styles.activePill]}>
              <Text style={[styles.catText, index === 0 && styles.activeCatText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* High-End Hero Banner */}
        <TouchableOpacity activeOpacity={0.9} style={styles.bannerContainer}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" }} 
            style={styles.bannerImage} 
          />
          <BlurView intensity={60} tint="light" style={styles.bannerGlassInfo}>
            <Text style={styles.bannerTitle}>THE CLOUD</Text>
            <Text style={styles.bannerSub}>Spring Collection 2026</Text>
          </BlurView>
        </TouchableOpacity>

        {/* Product List */}
        <View style={styles.productSection}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 25, paddingRight: 20 }}>
            {products.map((product, i) => (
              <View key={i} style={styles.productCard}>
                <Image source={{ uri: product.img }} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                  <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* --- Refined Bottom Nav --- */}
      <View style={styles.bottomNavWrapper}>
        <BlurView intensity={100} tint="dark" style={styles.bottomNavBlur}>
          <TouchableOpacity style={styles.navItem}>
             <Text style={styles.navEmoji}>🏠</Text>
             <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
             <Text style={styles.navEmoji}>🧭</Text>
             <Text style={styles.navLabel}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
             <Text style={styles.navEmoji}>✨</Text>
             <Text style={styles.navLabel}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
             <Text style={styles.navEmoji}>👤</Text>
             <Text style={styles.navLabel}>Profile</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#FFFFFF",
  gold: "#AF9461",
  black: "#000000",
  cardBg: "#F2F2F7",
  textSecondary: "#8E8E8E",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  solidTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: COLORS.bg,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 4,
    color: COLORS.black,
  },
  topIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  headerIconCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: COLORS.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topEmoji: { fontSize: 16 },
  dot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.gold,
  },
  searchWrapper: {
    paddingHorizontal: 25,
    paddingBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 40,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 10,
    opacity: 0.4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '500',
  },
  categoryRow: {
    paddingLeft: 25,
    paddingVertical: 10,
  },
  catPill: {
    marginRight: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
  },
  activePill: { backgroundColor: COLORS.black },
  catText: { fontSize: 13, fontWeight: "600", color: COLORS.textSecondary },
  activeCatText: { color: "white" },
  bannerContainer: {
    marginHorizontal: 25,
    height: 350,
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 10,
  },
  bannerImage: { width: '100%', height: '100%' },
  bannerGlassInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bannerTitle: { fontSize: 24, fontWeight: '800', letterSpacing: 2 },
  bannerSub: { fontSize: 12, opacity: 0.7, letterSpacing: 1 },
  productSection: { marginTop: 35 },
  sectionTitle: { fontSize: 22, fontWeight: "800", marginBottom: 20, paddingHorizontal: 25 },
  productCard: {
    width: 200,
    backgroundColor: COLORS.cardBg,
    borderRadius: 30,
    padding: 10,
    marginRight: 20,
  },
  productImage: { height: 220, width: '100%', borderRadius: 25 },
  productDetails: { padding: 12 },
  productName: { fontSize: 14, fontWeight: "600" },
  productPrice: { fontSize: 13, opacity: 0.6, marginTop: 4 },
  addBtn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: { fontSize: 18, fontWeight: '600' },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomNavBlur: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width * 0.9,
    paddingVertical: 12,
    borderRadius: 35,
    overflow: 'hidden',
  },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navEmoji: { fontSize: 20, marginBottom: 2 },
  navLabel: { fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: '600' },
});