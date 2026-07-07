import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Back, Love } from "@hugeicons/core-free-icons";
import tw from "twrnc";
import { useRouter } from "expo-router";

export default function Header () {
    const router = useRouter();

    return(
        <View style={[tw`flex-row items-center justify-between p-3`]}>
            
            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                <HugeiconsIcon 
                    icon={Back}
                    size={25}
                    color={"black"}            
                />
            </TouchableOpacity>

            <Text style={styles.text}>Details</Text>

            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                <HugeiconsIcon 
                    icon={Love}
                    size={25}
                    color={"black"}            
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#e6e6e6db"
    },
    text: {
        fontSize: 22,
        fontWeight: '500'
    }
})