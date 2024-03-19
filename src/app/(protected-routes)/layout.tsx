import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import UserProvider from "./UserProvider";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    return (
        <UserProvider>
            <div className="flex flex-row w-full bg-[#FEF7FE]">{children}</div>
        </UserProvider>
    );
}
