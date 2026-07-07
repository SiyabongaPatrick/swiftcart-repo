import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useState } from "react";
import { Home01Icon, Restaurant01Icon, Shirt01Icon, LaptopCloudIcon } from "@hugeicons/core-free-icons";

export default function Category() {
    const [active, setActive] = useState("Electronics")

    const categories = [ 
        {name: "Home", icon: Home01Icon},
        {name: "Food", icon: Restaurant01Icon},  
        {name: "Fashion", icon: Shirt01Icon}, 
        {name: "Electronics", icon: LaptopCloudIcon}, 
    ];

    return(
        <View style={[tw`py-3`]}>
            <View style={[tw`flex-row items-center gap-5 justify-center`]}>
                {categories.map((items, i) => (
                    <TouchableOpacity key={i} style={[styles.button, 
                        {backgroundColor: active === items.name ? "orange" : "#1E293B"}]} 
                        onPress={() => setActive(items.name)}>
                        <HugeiconsIcon
                            icon={items.icon}
                            size={20}
                            color={"#FFFFFF"}                        
                        />
                        
                        {active === items.name && (
                            <Text style={{color: "white"}}>{items.name}</Text>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        //width: "10%",
        borderRadius: 25
    }
})