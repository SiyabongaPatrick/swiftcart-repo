import { colors } from "@/constants/colors";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Cart, Notification, ShoppingBag01Icon } from "@hugeicons/core-free-icons";

export default function Header () {
    return(
        <View style={{}}>
            <View style={[tw`flex-row items-center justify-between p-1.5`]}>
                <View style={[tw`flex-row items-center`]}>
                    <Text style={{color: colors.text, fontSize: 25}}>Swift
                    <Text style={{fontWeight: "bold"}}>Cart</Text></Text>

                    <HugeiconsIcon 
                        icon={Cart}
                        fill={"#000000"}
                        size={25}                    
                    />
                </View>

                <View style={styles.container}>

                    {/* 
                    <TouchableOpacity>
                        <HugeiconsIcon
                            icon={Notification}
                            size={30}
                            color="#000"
                            style={{position: "relative"}}
                        />
                        <View style={styles.badge}>
                            <Text style={{color: colors.background}}></Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator}/>
                    */}
                    

                    <TouchableOpacity>
                        <HugeiconsIcon
                            icon={ShoppingBag01Icon}
                            size={30}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>        
    );
}

const styles = StyleSheet.create({
    badge: {
        position: "absolute",
        right: -4,
        top: -4,
        backgroundColor: "red",
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    container: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        padding: 10,
        borderRadius: 10
    },

    separator: {
        backgroundColor: "gray",
        width: 1,
        height: 25
    }
})