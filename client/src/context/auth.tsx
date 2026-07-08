import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    user: null,
    isLoading: true,
    signIn: () => {},
    signOut: () => {},
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }:
    { children: React.ReactNode }) {
        const [user, setUser] = useState(null);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setUser(null);
                setIsLoading(false);
            }, 1000)
        }, []);

        return(
            <AuthContext.Provider
                value={({
                    user,
                    isLoading,
                    signIn: () => setUser({ name: "User" }),
                    signOut: () => setUser(null),
                })}
            >
                {children}
            </AuthContext.Provider>
        );
    }
