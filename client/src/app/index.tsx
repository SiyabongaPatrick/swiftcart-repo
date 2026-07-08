import { View, Text, Image, StyleSheet } from "react-native";
import tw from "twrnc";
import { colors } from "@/constants/colors";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
    
    return(
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center"
    },

    logo: {
        width: "50%",
        height: "50%"
    },
})