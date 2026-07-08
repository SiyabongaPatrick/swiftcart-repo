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
});
