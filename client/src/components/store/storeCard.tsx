import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

export default function storeCard({ name, image }){

    return(
        <View style={styles.background}>
            <TouchableOpacity style={styles.button}>
                <Image 
                    source={{ uri: image }}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                />
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f6f6f6",
        padding: 10,
        margin: 5,
        borderRadius: 15,
        width: "47%"
    },

    button: {
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontSize: 16,
        fontWeight: '400'
    }
})