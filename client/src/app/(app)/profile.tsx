import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { useAuth } from "@/context/auth";
import MenuItem from "@/components/profile/MenuItem";
import LogoutButton from "@/components/profile/LogoutButton";
import { FavouriteIcon, Location01Icon, Package, Settings01Icon } from "@hugeicons/core-free-icons";
import { router } from "expo-router";

export default function Profile() {
    const { user, signOut } = useAuth();

    console.log(user)

    return (
        <View style={styles.container}>
            <View style={styles.topCircle} />
            <View style={styles.bottomCircle} />
            <ProfileHeader
                name={user.user.name}
                email={user.user.email} />

            <MenuItem
                icon={Package}
                title="My Orders"
                color="#5df545"
                onPress={() => { }}
            />

            <MenuItem
                icon={FavouriteIcon}
                title="Wishlist"
                color="#f54545"
                onPress={() => { }}
            />

            <MenuItem
                icon={Location01Icon}
                title="Shipping Address"
                color="#455ff5"
                onPress={() => { }}
            />

            <MenuItem
                icon={Settings01Icon}
                title="Settings"
                color="#000000"
                onPress={() => { }}
            />

            <LogoutButton
                onPress={async () => {
                    await signOut();
                    router.replace("/(auth)");
                }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    topCircle: {
        position: 'absolute',
        top: -120,
        right: -80,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: 'rgba(255, 153, 0, 0.12)',
    },

    bottomCircle: {
        position: 'absolute',
        bottom: -100,
        left: -60,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(255, 153, 0, 0.08)',
    },
})