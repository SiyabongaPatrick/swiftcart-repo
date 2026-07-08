import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";;
import tw from "twrnc";
import { Search01Icon, FilterEditIcon } from "@hugeicons/core-free-icons";

export default function User() {
    
    const user = "Patrick Nyembe"

    return (
        <View style={[tw`flex-row items-center gap-3 justify-center mt-4`]}>
            <Text style={styles.greet}>Hello, <Text style={styles.span}>{user}</Text>👋</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 15
    },
    filter: {
        backgroundColor: "orange",
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: "center",
        alignItems: "center"
    },

    greet: {
        fontSize: 18,
        fontWeight: '400'
    },

    span: {
        fontWeight: '800'
    }
})