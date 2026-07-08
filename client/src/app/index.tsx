import { View, Text, Image, StyleSheet } from "react-native";
import tw from "twrnc";
import { colors } from "@/constants/colors";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
    
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/(app)");
        }, 3000);
    }, []);

    return(
        <View style={styles.container}>
            
            <View style={[tw`items-center justify-center`]}>
                <Image 
                    source={require("@/assets/images/logo.png")}
                    style={styles.logo}
                />
            </View>
           
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