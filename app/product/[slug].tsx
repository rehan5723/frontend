import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';
import { useWishlist } from '../context/WishlistContext';

const products: Record<string, { title: string; price: string; image: string; description: string }> = {
  'minimal-chair': {
    title: 'Minimal Chair',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800',
    description:
      'A sculptural lounge chair with clean lines and a soft, supportive silhouette. Perfect for living rooms and cozy reading nooks.',
  },
  'ceramic-vase': {
    title: 'Ceramic Vase',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800',
    description:
      'Handcrafted ceramic vase with elegant matte finish. A refined accent piece for modern shelves and tabletops.',
  },
  'pendant-light': {
    title: 'Pendant Light',
    price: '₹5,299',
    image: 'https://images.unsplash.com/photo-1543055868-96bbbf829d67?q=80&w=800',
    description:
      'A statement pendant light with warm ambient glow. Ideal for dining areas, kitchen islands, and entryways.',
  },
  'oak-table': {
    title: 'Oak Table',
    price: '₹12,499',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=800',
    description:
      'Solid oak table with a minimalist profile. Designed for family meals, work-from-home days, and entertaining guests.',
  },
};

export default function ProductDetailScreen() {
  const router = useRouter();
  const { slug } = useSearchParams<{ slug: string }>();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const product = slug ? products[slug] : undefined;
  const wishlisted = slug ? isWishlisted(slug) : false;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        {product ? (
          <>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>{product.price}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={[
                    styles.wishlistButton,
                    wishlisted && styles.wishlistedButton,
                  ]}
                  onPress={() =>
                    product &&
                    toggleWishlist({
                      slug: slug ?? '',
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      description: product.description,
                    })
                  }
                >
                  <Text
                    style={[
                      styles.wishlistButtonText,
                      wishlisted && styles.wishlistedButtonTextActive,
                    ]}
                  >
                    {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buyButton}
                  onPress={() =>
                    product &&
                    router.push({
                      pathname: '/checkout',
                      params: { product: product.title },
                    })
                  }
                >
                  <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.title}>Product not found</Text>
            <Text style={styles.description}>
              Sorry, we couldn’t find that item. Try selecting another product from the home screen.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  backText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 320,
  },
  info: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 24,
  },
  wishlistButton: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  wishlistButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  wishlistedButtonTextActive: {
    color: '#fff',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  wishlistedButton: {
    backgroundColor: '#000',
  },
  emptyState: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
