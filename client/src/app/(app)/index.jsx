import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/components/home/header";
import SearchBar from "@/components/home/searchBar";
import Banner from "@/components/home/banner";
import Category from "@/components/home/category";
import Products from "@/components/home/products";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  const productRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />
      <Header/>
      <Banner/>
      <Category onSelectedCategory={(name) => setSelectedCategory(name)}/>
      <Products categoryName={selectedCategory}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 5
  },

  topCircle: {
        position: 'absolute',
        top: -120,
        right: -80,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: 'rgba(255, 153, 0, 0.12)',
    },

    bottomCircle: {
        position: 'absolute',
        bottom: -100,
        left: -60,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(255, 153, 0, 0.08)',
    },
});
