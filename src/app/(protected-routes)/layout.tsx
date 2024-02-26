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
        redirect("/api/auth/login?post_login_redirect_url=/dashboard");
    }

    return (
        <UserProvider>
            <div className="flex flex-row w-full bg-[#FCFCFD]">{children}</div>
        </UserProvider>
    );
}
