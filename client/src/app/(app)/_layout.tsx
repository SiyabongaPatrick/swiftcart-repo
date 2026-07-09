import { Tabs } from "expo-router";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Home01Icon, Cart, Profile, Setting06Icon, Love, Shop } from "@hugeicons/core-free-icons";

export default function AppLayout() {
    return(
        <Tabs screenOptions={{ headerShown: false, 
            tabBarActiveTintColor: "orange", 
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                height: 55,
                justifyContent: "center",
                borderTopWidth: 0
            } }}>
            <Tabs.Screen 
                name="index" 
                options={{ title: 'Home', tabBarIcon: ({ color }) => 
                <HugeiconsIcon
                    icon={Home01Icon}
                    size={30}
                    color={color}
                /> }} />

                <Tabs.Screen 
                name="cart" 
                options={{ title: 'Cart', tabBarIcon: ({ color }) => 
                <HugeiconsIcon
                    icon={Cart}
                    size={30}
                    color={color}
                /> }} />

                <Tabs.Screen 
                name="wishlist" 
                options={{ title: 'Wishlist', tabBarIcon: ({ color }) => 
                <HugeiconsIcon
                    icon={Love}
                    size={30}
                    color={color}
                /> }} />

                <Tabs.Screen 
                name="profile" 
                options={{ title: 'Profile', tabBarIcon: ({ color }) => 
                <HugeiconsIcon
                    icon={Profile}
                    size={30}
                    color={color}
                /> }} />

        </Tabs>
    );
}