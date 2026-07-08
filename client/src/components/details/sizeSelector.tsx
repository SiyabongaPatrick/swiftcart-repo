import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function SizeSelctor({ category, onSelect, selectedSize }) {

    console.log("Current category is: ", category)
    const sizes = ["S", "M", "L", "XL"]

    if (category === "Fashion") {
        return (
            <View style={styles.container}>
                {sizes.map((size) => (
                    <TouchableOpacity 
                        key={size} 
                        style={[styles.button, selectedSize === size && {backgroundColor: "#d0cfcf"}]}
                        onPress={() => onSelect(size)}>
                        <Text style={styles.text}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
        justifyContent: "center"
    },

    button: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: "#CCC",
        borderRadius: 8,
        width: 50,
        alignItems: "center"
    },

    text: {
        color: "black"
    }
})
