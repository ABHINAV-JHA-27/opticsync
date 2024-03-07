export const createPayment = async (data: any) => {
    try {
        const response = await fetch("/api/payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result.data;
    } catch (error) {
        return error;
    }
};

export const getPayments = async () => {
    try {
        const response = await fetch("/api/payment");
        const result = await response.json();
        return result.data;
    } catch (error) {
        return error;
    }
};
