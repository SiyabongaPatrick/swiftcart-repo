const API_URL ="http://192.168.0.104:5000";

export async function getStores() {
    const response = await fetch(`${API_URL}/stores`);
    return await response.json();
}

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
}

export async function getProduct(id) {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await response.json();
}

export async function getStore(id) {
    const response = await fetch(`${API_URL}/stores/${id}`);
    return await response.json();
}

export async function getCategories(categoryName) {
    const response = await fetch(`${API_URL}/categories/${categoryName}`);
    return response.json();
}

export async function getPopularProducts() {
    const response = await fetch(`${API_URL}/popular`);
    return response.json();
}

export async function addCart() {
    const response = await fetch(`${API_URL}/cart/add`);
    return response.json();
}

export async function signUp(userData) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    return response.json();
}

export async function logIn(userData) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error)
    }
    return data;
}