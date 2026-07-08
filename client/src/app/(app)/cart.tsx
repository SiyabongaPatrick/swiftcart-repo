import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import Header from "@/components/cart/header"
export default function Cart () {
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
})