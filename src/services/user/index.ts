export const createUser = async (data: any) => {
    const response = await fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    return resp;
};

export const getUser = async () => {
    const response = await fetch("/api/user");
    const resp = await response.json();
    return resp;
};

export const updateUser = async (data: any) => {
    const response = await fetch("/api/user", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    return resp;
};

export const deleteUser = async () => {
    const response = await fetch("/api/user", {
        method: "DELETE",
    });
    const resp = await response.json();
    return resp;
};
