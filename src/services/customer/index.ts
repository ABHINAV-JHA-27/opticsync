export const createCustomer = async (data: any) => {
    try {
        const response = await fetch("/api/customers", {
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

export const getCustomers = async () => {
    try {
        const response = await fetch("/api/customers");
        const data = await response.json();

        if (response.status === 200) {
            return data.data;
        }

        return [];
    } catch (error) {
        return error;
    }
};

export const updateCustomer = async (data: any) => {
    try {
        const response = await fetch(`/api/customers/${data.id}`, {
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

export const deleteCustomer = async (id: string) => {
    try {
        const response = await fetch(`/api/customers/${id}`, {
            method: "DELETE",
        });
        return response.json();
    } catch (error) {
        return error;
    }
};
