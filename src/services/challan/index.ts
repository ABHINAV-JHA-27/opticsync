export const getChallans = async () => {
    const response = await fetch("/api/challan");
    const result = await response.json();
    return result.data;
};

export const createChallan = async (data: any) => {
    const response = await fetch("/api/challan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result.data;
};
