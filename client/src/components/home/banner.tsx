import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";

export default function Banner () {
    return(
        <View style={styles.container}>
            <View style={styles.circle}/>
            <Text style={styles.smallText}>SPECIAL OFFER</Text>
            <Text style={styles.title}>Shop Smarter{"\n"}with <Text style={styles.span}>SwiftCart</Text></Text>
            <Text style={styles.subtitle}>Discover amazing products today</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 170,
        marginHorizontal: 5,
        marginTop: 20,
        padding: 25,
        borderRadius: 24,
        backgroundColor: "#111827",
        justifyContent: "center",
        overflow: "hidden"
    },

    smallText: {
        fontSize: 12,
        fontWeight: 700,
        color: "#94A388",
        letterSpacing: 1
    },

    title: {
        marginTop: 8,
        fontSize: 25,
        fontWeight: "800",
        color: "#FFFFFF"
    },

    span: {
        color: "orange"
    },

    subtitle: {
        marginTop: 8,
        fontSize: 14,
        color: "#CBD5E1"
    },

    circle: {
        position: "absolute",
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#1E293B",
        right: 60,
        top: -60,
    }
})