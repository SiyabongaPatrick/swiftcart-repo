import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/components/home/header";
import SearchBar from "@/components/home/searchbar";
import Banner from "@/components/home/banner";
import Category from "@/components/home/category";
import Products from "@/components/home/products";

export default function Index() {
  
  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar/>
      <Banner/>
      <Category/>
      <Products/>
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
