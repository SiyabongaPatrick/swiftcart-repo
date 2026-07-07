import { View, Text, Image } from "react-native";
import tw from "twrnc";

export default function Carousel ({ image }) {

    return(
        <View style={[tw`items-center justify-center mt-5`]}>
            <Image
                source={{ uri: image }}
                style={{width: "100%", height: 270, borderRadius: 30}}
            />
        </View>
    )
}