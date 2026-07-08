import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ShoppingCart01Icon } from "@hugeicons/core-free-icons";

export default function CTAButton (){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
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