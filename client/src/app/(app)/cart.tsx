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
import { getCart, increaseQuantity, decreaseQuantity, removeQuantity } from "@/services/api";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);


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

  const increase = async (productID) => {
    try {
      await increaseQuantity(productID);
      const updatedItems = await getCart();
      console.log(updatedItems);
      setCartItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const decrease = async (productID) => {
    try {
      await decreaseQuantity(productID);
      const updatedItems = await getCart();
      console.log(updatedItems);
      setCartItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id) => {
    try {
      await removeQuantity(id);
      const updatedItems = await getCart();
      console.log(updatedItems);
      setCartItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  }

 
  const subtotal = cartItems.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0)


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
                onIncrease={() => {increase(item.product_id)}}
                onDecrease={() => {decrease(item.product_id)}}
                onRemove={() => {remove(item.id)}}
              />
            ))}

            <CartSummary
              subtotal={subtotal}
              shipping={0}
              total={subtotal}
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