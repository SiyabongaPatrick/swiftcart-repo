import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import {
    Profile,
    Lock,
    ViewIcon,
    Mail,
    ViewOffIcon,
    Person,
} from "@hugeicons/core-free-icons";
import { signUp, logIn } from "@/services/api"
import { saveToken } from '@/services/storage';
import { useAuth } from '@/context/auth';
import { useRouter } from "expo-router"

export default function Auth() {
    const router = useRouter()
    const [isSignIn, setIsSignIn] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useAuth();

    const signingUp = async () => {
        try {
            const result = await signUp({ name, email, password })
            ToastAndroid.show(result.message, ToastAndroid.LONG);
            console.log(result)
            await signIn(result);
            router.replace("/(app)");
        } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.LONG);
        }
    }

    const signingIn = async () => {
        try {
            const result = await logIn({ email, password });
            await signIn(result);
            console.log(result)
            ToastAndroid.show(result.message, ToastAndroid.LONG);
            router.replace("/(app)")
        } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.LONG);
        }
    }

    return (
        <View style={styles.container}>
            {/* Decorative background circles */}
            <View style={styles.topCircle} />
            <View style={styles.bottomCircle} />

            {/* Auth Card */}
            <View style={styles.card}>
                <View style={styles.iconWrapper}>
                    <HugeiconsIcon icon={Profile} size={42} color="white" />
                </View>

                <Text style={styles.title}>
                    {isSignIn ? 'Welcome Back' : 'Create Account'}
                </Text>

                <Text style={styles.subtitle}>
                    {isSignIn
                        ? 'Sign in to continue shopping'
                        : 'Join us and start exploring'}
                </Text>

                {!isSignIn && (
                    <View style={styles.inputContainer}>
                        <HugeiconsIcon
                            icon={Person}
                            size={20}
                            color="#9CA3AF"
                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder='Full name'
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                )}

                <View style={styles.inputContainer}>
                    <HugeiconsIcon
                        icon={Mail}
                        size={20}
                        color="#9CA3AF"
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Email address"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    <HugeiconsIcon
                        icon={Lock}
                        size={20}
                        color="#9CA3AF"
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <HugeiconsIcon
                            icon={showPassword ? ViewOffIcon : ViewIcon}
                            size={20}
                            color="#9CA3AF"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={isSignIn ? signingIn : signingUp}>
                    <Text style={styles.buttonText}>
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.switchButton}
                    onPress={() => setIsSignIn(!isSignIn)}
                >
                    <Text style={styles.switchText}>
                        {isSignIn
                            ? "Don't have an account? "
                            : 'Already have an account? '}
                        <Text style={styles.switchTextBold}>
                            {isSignIn ? 'Sign Up' : 'Sign In'}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
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

    card: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        padding: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },

    title: {
        fontSize: 24,
        fontWeight: "800",
        color: "#111827",
        textAlign: "center",
    },

    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        textAlign: "center",
        marginTop: 6,
        marginBottom: 24,
    },

    iconWrapper: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: "#FF9900",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 18,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    textInput: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 12,
        fontSize: 15,
        color: "#111827",
    },

    forgotText: {
        textAlign: 'right',
        color: '#FF9900',
        fontWeight: '600',
        marginBottom: 22,
    },

    button: {
        backgroundColor: '#FF9900',
        borderRadius: 18,
        paddingVertical: 17,
        alignItems: 'center',
        shadowColor: '#FF9900',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 6,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
    },

    switchButton: {
        marginTop: 24,
        alignItems: 'center',
    },

    switchText: {
        color: '#6B7280',
        fontSize: 14,
    },

    switchTextBold: {
        color: '#FF9900',
        fontWeight: '700',
    },
});