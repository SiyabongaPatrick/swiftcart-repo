import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";;
import tw from "twrnc";
import { Search01Icon, FilterEditIcon } from "@hugeicons/core-free-icons";

export default function SearchBar() {
    const [text, setText] = useState('');

    return (
        <View style={[tw`flex-row items-center gap-3 justify-center mt-4`]}>
            {/* Search bar */}
            <View style={{
                padding: 2,
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                backgroundColor: "#e2e1e15e",
                borderRadius: 20,
                
            }}>
                <HugeiconsIcon
                    icon={Search01Icon}
                    size={25}
                    color="#000000"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Search products"
                    placeholderTextColor={"grey"}
                    onChangeText={(newText) => setText(newText)}
                    value={text}
                />
            </View>

            {/* filter */}
            <View style={styles.filter}>
                <TouchableOpacity>
                    <HugeiconsIcon
                        icon={FilterEditIcon}
                        size={25}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            </View>
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
    }
})