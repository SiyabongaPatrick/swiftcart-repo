import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";

export default function CTAButton (){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
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
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 20,
        width: "80%",
         alignItems: "center"
    },

    text: {
        color: "white"
    }
})