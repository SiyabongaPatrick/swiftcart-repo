import { useEffect } from "react";
import { router } from "expo-router";
import { useAuth } from "@/context/auth";

export default function Index() {
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (isLoading) return;

        if (user) {
            router.replace("/(app)");
        } else {
            router.replace("/(auth)");
        }
    }, [user, isLoading]);

    return null;
}