import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";

export default function Description(){
    return(
        <View style={[tw`p-1`]}>
            <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Fugit libero debitis autem hic expedita. Aliquam, ullam repellendus facilis reprehenderit, 
                consequatur mollitia delectus voluptatibus rerum nemo veritatis vitae fugit, reiciendis corporis!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        color: "#cccccc",
        fontSize: 16,
    }
})