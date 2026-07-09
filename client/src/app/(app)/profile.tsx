import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/auth";

export default function Profile () {
    const { user, signOut } = useAuth();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>User Logged In</Text>
            <Text>{JSON.stringify(user)}</Text>

            <TouchableOpacity onPress={signOut}>
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}