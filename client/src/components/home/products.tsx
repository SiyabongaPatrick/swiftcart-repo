import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import tw from "twrnc";
import { getProducts, getCategories, getPopularProducts, addToWishlist  } from "@/services/api";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Add01Icon, Add02Icon, Love } from "@hugeicons/core-free-icons";
import { useRouter } from "expo-router";


export default function Products({ categoryName }) {
    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [favorite, setFavorite] = useState();
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const categoryFilter = async (categoryName) => {
        setLoading(true);

        try {
            const categories = await getCategories(categoryName);
            setProducts(categories);

            console.log("API RESPONSE:", categories);
            setLoading(false);
        } catch (error) {
            console.error(error)
            setLoading(false);
        }
    }

    const addWishlist = async (productID) => {
        try {
            await addToWishlist(productID)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        categoryFilter(categoryName)
    }, [categoryName])

    if (loading) {
        return (
            <View style={[tw`items-center justify-center`]}>
                <ActivityIndicator color={"orange"}/>
                <Text style={{ color: "orange", fontSize: 16 }}>Fetching Products...</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={{marginBottom: "23%"}}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <View style={styles.background}>
                        <TouchableOpacity onPress={() => router.push({
                            pathname: "/screens/details",
                            params: {
                                id: item.id,
                                store: item.store_id
                            }
                        })}>
                            <Image
                                source={{ uri: item.image_url }}
                                style={{ width: "100%", height: 150, borderRadius: 20 }}
                            />
                        </TouchableOpacity>

                        <View style={[tw`flex-row items-center justify-between py-1`]}>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>

                            <TouchableOpacity onPress={() => {addWishlist(item.id)}} style={styles.wishlist}>
                                <HugeiconsIcon
                                    icon={Love}
                                    size={25}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f2f2f2",
        padding: 10,
        margin: 5,
        borderRadius: 15,
        width: "47%"
    },

    name: {
        fontSize: 13,
        fontWeight: '500',
        color: 'gray'
    },

    price: {
        fontSize: 18,
        fontWeight: '700',

    },

    addButton: {
        backgroundColor: "orange",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },

    addButton1: {
        backgroundColor: "transparent",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },

    wishlist: {
        position: "absolute",
        top: "60%",
        left: "80%",
        right: 0
    }
})