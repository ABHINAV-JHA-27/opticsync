export const getOrder = async () => {
    const response = await fetch("/api/orders");
    const data = await response.json();
    return data.data;
};

export const changeOrderStatus = async (data: any) => {
    const response = await fetch(`/api/orders/active/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: data.status.toLowerCase() }),
    });
    const resp = await response.json();
    return resp;
};

export const createOrder = async (data: any) => {
    const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    return resp;
};

export const updateOrder = async (data: any) => {
    const response = await fetch(`/api/orders/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data.value),
    });
    const resp = await response.json();
    return resp;
};

export const deleteOrder = async (id: string) => {
    const response = await fetch(`/api/orders/${id}`, {
        method: "DELETE",
    });
    const resp = await response.json();
    return resp;
};
