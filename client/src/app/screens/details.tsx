import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useLoaderData, useLocalSearchParams } from "expo-router";
import tw from "twrnc";
import Header from "@/components/details/header";
import Carousel from "@/components/details/carousel";
import Info from "@/components/details/info";
import CTAButton from "@/components/details/cta_button";
import { getProduct } from "@/services/api";
import Description from "@/components/details/description";
import SizeSelector from "@/components/details/sizeSelector";

export default function Details () {
    const { id, store } = useLocalSearchParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        setLoading(true);
        const loadProduct = async () => {
            try {
                const item = await getProduct(id);
                setProduct(item);
                console.log(item);
                setLoading(false);
            } catch (error) {
                console.error(error)
                setLoading(false);
            }
        } 
        loadProduct();
    }, [])

    if (loading) {
        return(
            <View style={[tw`flex-1 items-center justify-center bg-[#FFFFFF]`]}>
                <ActivityIndicator color={"orange"} size={"large"}/>
                <Text style={{fontSize: 16, color: "#cacaca"}}>Fetching product details...</Text>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <Header/>
            <Carousel image={product.image_url}/>
            <Info 
                name={product.name}
                price={product.price}
                store={store}
            />
            <SizeSelector 
                category={product.category}
                selectedSize={selectedSize}
                onSelect={(size) => setSelectedSize(size)}/>
                <Description/>
            <CTAButton/>
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