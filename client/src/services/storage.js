import * as SecureStore from "expo-secure-store";

export async function saveToken(token) {
    await SecureStore.setItemAsync("token", token);
}

export async function saveAuth(auth) {
    await SecureStore.setItemAsync("auth", JSON.stringify(auth));
}

export async function getAuth() {
    const auth = await SecureStore.getItemAsync("auth");
    if (!auth) return null;

    return JSON.parse(auth);
}

export async function removeAuth() {
    await SecureStore.deleteItemAsync("auth");
}
export async function getToken() {
    const auth = await getAuth();
    return auth?.access_token;
    //return await SecureStore.getItemAsync("token");
}

export async function removeToken() {
    await SecureStore.deleteItemAsync("token");
}