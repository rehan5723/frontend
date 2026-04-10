import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  // Sample Data with High-End Images
  const categories = ["Sofa", "Kitchen", "Decor", "Lighting", "Outdoor"];
  
  const bannerImages = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300",
    "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=300",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=300",
    "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=300",
  ];

  const products = [
    { name: "Minimal Chair", price: "₹7,999", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400" },
    { name: "Ceramic Vase", price: "₹2,499", img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400" },
    { name: "Pendant Light", price: "₹5,299", img: "https://images.unsplash.com/photo-1543055868-96bbbf829d67?q=80&w=400" },
    { name: "Oak Table", price: "₹12,499", img: "https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=400" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandSubtitle}>COLLECTION 2026</Text>
          <Text style={styles.title}>Shop by category</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Category Row */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandRow}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.brandItem}>
              <Text style={[styles.brandText, index === 0 && styles.activeBrandText]}>{item}</Text>
              {index === 0 && <View style={styles.activeDot} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerHeader}>
            <View>
              <Text style={styles.bannerTitle}>LIVING</Text>
              <Text style={styles.bannerSub}>Modern Comfort Collection</Text>
            </View>
            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>SHOP</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bannerProducts}>
            {bannerImages.map((imgUri, i) => (
              <View key={i} style={styles.smallCard}>
                <Image source={{ uri: imgUri }} style={styles.imagePlaceholder} />
                <Text style={styles.price}>₹3,999</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Product List */}
        <View style={styles.productSection}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20 }}>
            {products.map((product, i) => (
              <TouchableOpacity key={i} style={styles.productCard}>
                <Image source={{ uri: product.img }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {/* Extra Space for Bottom Nav */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity><Text style={styles.navIcon}>🏠</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navIcon}>🔍</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navIcon}>❤️</Text></TouchableOpacity>
          <TouchableOpacity>
             <View style={styles.cartIconContainer}>
                <Text style={styles.navIcon}>🛒</Text>
                <View style={styles.cartBadge} />
             </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#F8F8F7",
  beige: "#E5E0D5",
  taupe: "#BFB7A6",
  gold: "#AF9461",
  black: "#1A1A1A",
  textSecondary: "#8E8E8E",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 25,
  },
  brandSubtitle: {
    fontSize: 10,
    letterSpacing: 2,
    color: COLORS.gold,
    fontWeight: "700",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontFamily: "serif",
    color: COLORS.black,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: "600",
    textDecorationLine: "underline",
    color: COLORS.black,
  },
  brandRow: {
    paddingLeft: 25,
    paddingBottom: 20,
  },
  brandItem: {
    marginRight: 30,
    alignItems: 'center',
  },
  brandText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },
  activeBrandText: {
    color: COLORS.black,
    fontWeight: "700",
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.gold,
    marginTop: 4,
  },
  banner: {
    backgroundColor: COLORS.beige,
    marginHorizontal: 20,
    borderRadius: 4,
    padding: 20,
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 28,
    fontFamily: "serif",
    letterSpacing: 4,
  },
  bannerSub: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  bannerBtn: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bannerBtnText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  bannerProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallCard: {
    width: (width - 100) / 4,
  },
  imagePlaceholder: {
    height: 80,
    width: '100%',
    backgroundColor: COLORS.taupe,
    borderRadius: 2,
    marginBottom: 5,
  },
  price: {
    fontSize: 10,
    fontWeight: '600',
  },
  productSection: {
    marginTop: 35,
    paddingLeft: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "serif",
    marginBottom: 20,
    letterSpacing: 1,
  },
  productCard: {
    width: 160,
    marginRight: 20,
  },
  productImage: {
    height: 200,
    width: 160,
    backgroundColor: COLORS.taupe,
    borderRadius: 2,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    color: COLORS.black,
  },
  productPrice: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: COLORS.black,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  navIcon: {
    fontSize: 20,
    color: 'white',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gold,
    borderWidth: 1,
    borderColor: COLORS.black,
  }
});