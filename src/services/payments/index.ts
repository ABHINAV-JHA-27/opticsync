export const createPayment = async (data: any) => {
    const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result.data;
};

export const getPayments = async () => {
    const response = await fetch("/api/payment");
    const result = await response.json();
    return result.data;
};
