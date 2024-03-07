export const getChallans = async () => {
    try {
        const response = await fetch("/api/challan");
        const result = await response.json();
        return result.data;
    } catch (error) {
        return error;
    }
};

export const createChallan = async (data: any) => {
    try {
        const response = await fetch("/api/challan", {
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
