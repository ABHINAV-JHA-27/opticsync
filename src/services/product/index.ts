export const getProducts = async () => {
    try {
        const response = await fetch("/api/products");
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const createProduct = async (product: any) => {
    try {
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const updateProduct = async (product: any) => {
    try {
        const response = await fetch("/api/products", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
