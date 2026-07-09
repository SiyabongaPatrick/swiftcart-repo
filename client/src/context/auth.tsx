import { createContext, useContext, useEffect, useState } from "react";
import { getToken, saveToken, removeToken } from "@/services/storage";



const AuthContext = createContext({
    user: null,
    isLoading: true,
    signIn: async (token: string) => {},
    signOut: async () => {},
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }:
    { children: React.ReactNode }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const signIn = async (token) => {
        await saveToken(token);
        setUser({ token });
    }

    const signOut = async (token) => {
        await removeToken();
        setUser(null);
    }

    useEffect(() => {
        const loadUser = async () => {
            const token = await getToken();

            if (token) {
                setUser({ token });
            }
            setIsLoading(false);
        };
        loadUser();
    }, [])

    return (
        <AuthContext.Provider
            value={({
                user,
                isLoading,
                signIn,
                signOut,
            })}
        >
            {children}
        </AuthContext.Provider>
    );
}
