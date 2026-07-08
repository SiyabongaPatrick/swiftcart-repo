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

export async function getCategories(category_name) {
    const response = await fetch(`${API_URL}/categories/${category_name}`);
    return response.json();
}