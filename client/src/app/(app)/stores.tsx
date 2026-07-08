import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getStore, getStores } from "@/services/api";

export default function Stores(){
    const [stores, setStores] =useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const loadStores = async () => {
            try {
                const store = await getStores();
                setStores(store);
            } catch (error) {
                console.error(error)
            }
        };
        loadStores()
    }, [])

    return(
        <View style={styles.container}>
            <Text>Stores</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
})