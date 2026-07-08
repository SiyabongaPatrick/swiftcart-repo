import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/components/home/header";
import SearchBar from "@/components/home/searchbar";
import Banner from "@/components/home/banner";
import Category from "@/components/home/category";
import Products from "@/components/home/products";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar/>
      <Banner/>
      <Category onSelectedCategory={setSelectedCategory}/>
      <Products category_name={selectedCategory}/>
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
