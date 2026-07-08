import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import tw from "twrnc";
import { getProducts, getCategories } from "@/services/api";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Add01Icon, Add02Icon, Love } from "@hugeicons/core-free-icons";
import { useRouter } from "expo-router";


export default function Products({ category_name }) {
    const [products, setproducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [favorite, setFavorite] = useState();
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const loadProducts = async () => {
        setLoading(true)
        try {
            const product = await getProducts();
            setproducts(product);

            console.log(product)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    };

    const categoryFilter = async () => {
        setLoading(true);

        try {
            const categories = await getCategories(category_name);
            setproducts(categories);

            console.log(categories);
            setLoading(false);
        } catch (error) {
            console.error(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        loadProducts();
        categoryFilter()
    }, [])

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
                                <Text style={styles.name}>{item.name.length > 10 ? item.name.substring(0, 10) + "..." : item.name}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>

                            <View style={[tw`flex-row items-center gap-1`]}>
                                <TouchableOpacity style={styles.addButton}>
                                    <HugeiconsIcon
                                        icon={Add01Icon}
                                        size={22}
                                        color={"#FFFFFF"}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.addButton1} onPress={() => setFavorite(favorite)}>
                                    <HugeiconsIcon
                                        icon={Love}
                                        size={25}
                                        color={favorite ? "gray" : "red"}
                                    />
                                </TouchableOpacity>
                            </View>
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
        fontSize: 14,
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
    }
})