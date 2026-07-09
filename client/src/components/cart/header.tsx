import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useRouter } from "expo-router";
import { ChevronLeftIcon, ChevronRightIcon, EllipseFreeIcons, EllipseIcon } from "@hugeicons/core-free-icons";
import { colors } from "@/constants/colors";


export default function Header () {
    const router = useRouter();

    return(
        <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                <HugeiconsIcon
                    icon={ChevronLeftIcon}
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>

            <Text style={styles.text}>Cart</Text>

            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                <HugeiconsIcon
                    icon={EllipseIcon}
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },

    back: {
        //borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: "#cccccc",
        alignItems: "center",
        justifyContent: "center",
        
    },

    text: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.text
    }
})