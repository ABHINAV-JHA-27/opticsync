import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, getUser } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login?post_login_redirect_url=/dashboard");
    }
    const user = await getUser();

    console.log(user);

    return <div className="flex flex-row w-full bg-[#7FC7D9]">{children}</div>;
}
