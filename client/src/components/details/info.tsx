import { View, Text, StyleSheet, Image } from "react-native";
import tw from "twrnc";
import { getStore } from "@/services/api";
import { useState, useEffect } from "react";

export default function Info ({ name, price, store }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const loadStore = async () => {
            try {
                const store_data = await getStore(store)
                setData(store_data);
                console.log(store_data)
                setLoading(false)
            }catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        loadStore();
    }, [])
    return (
        <View style={[tw`mt-2`]}>
            <View style={[tw`flex-row items-center justify-between p-2`]}>
                <View>
                    <Text style={styles.name}>{name}</Text>

                    <View style={[tw`flex-row items-center gap-2`]}>
                        <Text style={styles.store}>Offered by:</Text>

                        <View style={[tw`flex-row items-center gap-1`]}>
                            <Image
                                source={{ uri: data.image_url }}
                                style={{width: 20, height: 20, borderRadius: 10, borderWidth: 0.5, borderColor: "#cacaca"}}
                            />
                            <Text style={{color: "#cacaca", fontSize: 13}}>{data.name}</Text>
                        </View>
                    </View>
                </View>
                
                <Text style={styles.price}>${price}</Text>
            </View>

            <View style={[tw`p-2`]}>
                <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fugit libero debitis autem hic expedita. Aliquam, ullam repellendus facilis reprehenderit, 
                    consequatur mollitia delectus voluptatibus rerum nemo veritatis vitae fugit, reiciendis corporis!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: '600',
    },

    price: {
        fontSize: 20,
        fontWeight: '600',
        
    },

    store: {
        fontWeight: '600',
        color: "#bab9b9"
    },
    
    info: {
        color: "#cccccc",
        fontSize: 16,
    }
})