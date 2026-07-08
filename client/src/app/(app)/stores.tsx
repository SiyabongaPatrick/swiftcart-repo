import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { getStores } from "@/services/api";
import Header from "@/components/store/header";
import { colors } from "@/constants/colors";
import { useState, useEffect } from "react";
import StoreCard from "@/components/store/storeCard";
import tw from "twrnc"

export default function Stores(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const loadStores = async () => {
            try {
                const stores = await getStores();
                setData(stores);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        loadStores()
    }, [])

    if(loading) {
        return (
            <View style={[tw`flex-1 items-center justify-center bg-[#FFFFFF]`]}>
                <ActivityIndicator size={"large"} color={colors.text}/>
                <Text style={{ color: colors.text, fontSize: 16 }}>Loading Stores</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Header />

            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: 5
            }}>
                {data.map((item, index) => (
                    <StoreCard 
                        key={index}
                        name={item.name}
                        image={item.image_url}
                    />
                ))}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
})