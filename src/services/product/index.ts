export const getProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    return data.data;
};

export const createProduct = async (product: any) => {
    const response = await fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
};

export const updateProduct = async (product: any) => {
    const response = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product.value),
    });
    const data = await response.json();
    return data;
};

export const deleteProduct = async (id: string) => {
    const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
};
