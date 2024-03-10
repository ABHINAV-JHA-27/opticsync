export const createCustomer = async (data: any) => {
    const response = await fetch("/api/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    return resp;
};

export const getCustomers = async () => {
    const response = await fetch("/api/customers");
    const data = await response.json();
    return data.data;
};

export const updateCustomer = async (data: any) => {
    const response = await fetch(`/api/customers/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    return resp;
};

export const deleteCustomer = async (id: string) => {
    const response = await fetch(`/api/customers/${id}`, {
        method: "DELETE",
    });
    const resp = await response.json();
    return resp;
};
