export const getOrder = async () => {
    try {
        const response = await fetch("/api/orders");
        const data = await response.json();

        if (response.status === 200) {
            return data.data;
        }

        return [];
    } catch (error) {
        return error;
    }
};

export const createOrder = async (data: any) => {
    try {
        const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        return error;
    }
};

export const updateOrder = async (data: any) => {
    try {
        const response = await fetch(`/api/orders/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        return error;
    }
};

export const deleteOrder = async (id: string) => {
    try {
        const response = await fetch(`/api/orders/${id}`, {
            method: "DELETE",
        });
        return response.json();
    } catch (error) {
        return error;
    }
};
