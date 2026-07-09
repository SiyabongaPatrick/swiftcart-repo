import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants/colors";

import Header from "@/components/wishlist/Header";
import WishlistItem from "@/components/wishlist/WishlistItem";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";

import { getWishlist, removeFromWishlist } from "@/services/api"

export default function Cart() {
  const [listItems, setWishlistItems] = useState([]);


  useFocusEffect(
    useCallback(() => {
      const loadWishlist = async () => {
        try {
          const items = await getWishlist();
          console.log(items);
          setWishlistItems(items)
        } catch (error) {
          console.error(error)
        }
      };
      
      loadWishlist();
    }, [])
  );

  const remove = async (id) => {
    try {
      await removeFromWishlist(id);
      const updatedItems = await getWishlist();
      console.log(id);
      setWishlistItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {listItems.length === 0 ? (
          <EmptyWishlist
            onContinueShopping={() => router.push("/")}
          />
        ) : (
          <>
            {listItems.map((item) => (
              <WishlistItem
                key={item.id}
                image={item.image_url}
                name={item.product_name}
                category={item.category}
                price={item.price}
                onRemove={() => {remove(item.id)}}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  topCircle: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(255, 153, 0, 0.12)",
  },

  bottomCircle: {
    position: "absolute",
    bottom: -100,
    left: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(255, 153, 0, 0.08)",
  },
});