export const createUser = async (data: any) => {
    try {
        const response = await fetch("/api/user", {
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

export const getUser = async () => {
    try {
        const response = await fetch("/api/user");
        return response.json();
    } catch (error) {
        return error;
    }
};

export const updateUser = async (data: any) => {
    try {
        const response = await fetch("/api/user", {
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

export const deleteUser = async () => {
    try {
        const response = await fetch("/api/user", {
            method: "DELETE",
        });
        return response.json();
    } catch (error) {
        return error;
    }
};
