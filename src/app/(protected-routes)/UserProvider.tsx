"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { error, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: () => fetch("/api/user").then((res) => res.json()),
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (user && user.data.length === 0) {
        router.push("/onboarding");
    }

    return <>{children}</>;
};

export default UserProvider;
