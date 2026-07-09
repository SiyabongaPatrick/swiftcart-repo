import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants/colors";

import Header from "@/components/cart/header";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutButton from "@/components/cart/CheckoutButton";
import EmptyCart from "@/components/cart/EmptyCart";
import { getCart } from "@/services/api";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  /*
  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await getCart();
        console.log(items)
        setCartItems(items);
      } catch (error) {
          console.error(error);
      }
    };
    loadCart();
  }, []) */

  useFocusEffect(
    useCallback(() => {
      const loadCart = async () => {
        try {
          const items = await getCart();
          console.log(items);
          setCartItems(items)
        } catch (error) {
          console.error(error)
        }
      };
      loadCart();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {cartItems.length === 0 ? (
          <EmptyCart
            onContinueShopping={() => router.push("/")}
          />
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                image={item.image_url}
                name={item.product_name}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                onIncrease={() => {}}
                onDecrease={() => {}}
                onRemove={() => {}}
              />
            ))}

            <CartSummary
              subtotal={6597}
              shipping={0}
              total={6597}
            />

            <CheckoutButton
              onPress={() => router.push("/")}
            />
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