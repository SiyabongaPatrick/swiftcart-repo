import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ShoppingCart01Icon } from "@hugeicons/core-free-icons";
import { addCart } from "@/services/api";

export default function CTAButton ({ productId, selectedSize, quantity=1 }){

    const handleAddToCart = async () => {
        try {
            const data = {
                product_id: productId,
                quantity: quantity,
                size: selectedSize,
            };

            const response = await addCart(data);
            console.log("Added to cart:", data)
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                <HugeiconsIcon
                    icon={ShoppingCart01Icon}
                    size={25}
                    color="white"
                />
                <Text style={styles.text}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0
    },

    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 20,
        width: "80%",
        gap: 10
    },

    text: {
        color: "white"
    }
});