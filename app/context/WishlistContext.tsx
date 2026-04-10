import React, { createContext, useContext, useMemo, useState } from 'react';

type WishlistItem = {
  slug: string;
  title: string;
  price: string;
  image: string;
  description: string;
};

type WishlistContextValue = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (slug: string) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isWishlisted: (slug: string) => boolean;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setItems((current) => {
      if (current.some((existing) => existing.slug === item.slug)) {
        return current;
      }
      return [...current, item];
    });
  };

  const removeFromWishlist = (slug: string) => {
    setItems((current) => current.filter((item) => item.slug !== slug));
  };

  const toggleWishlist = (item: WishlistItem) => {
    setItems((current) => {
      if (current.some((existing) => existing.slug === item.slug)) {
        return current.filter((existing) => existing.slug !== item.slug);
      }
      return [...current, item];
    });
  };

  const isWishlisted = (slug: string) => {
    return items.some((item) => item.slug === slug);
  };

  const value = useMemo(
    () => ({ items, addToWishlist, removeFromWishlist, toggleWishlist, isWishlisted }),
    [items]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
