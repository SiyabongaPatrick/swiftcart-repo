import { createContext, useContext, useEffect, useState } from "react";
import { getToken, saveToken, removeToken, saveAuth, getAuth, removeAuth } from "@/services/storage";



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

    const signIn = async (auth) => {
        await saveAuth(auth);
        setUser(auth);
    }

    const signOut = async () => {
        await removeAuth();
        setUser(null);
    }

    useEffect(() => {
        const loadUser = async () => {
            const auth = await getAuth();
            if (auth) {
                setUser(auth);
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
