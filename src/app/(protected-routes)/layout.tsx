import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        // redirect("/api/auth/login?post_login_redirect_url=/dashboard");
    }

    return (
        <div
            className="flex flex-row w-full bg-white"
            style={
                {
                    // background:
                    //     "linear-gradient(109.6deg,rgb(120, 143, 251) 11.2%,rgb(133, 235, 255) 91.1%)",
                }
            }
        >
            <SideBar />
            <div className="w-full flex flex-col">
                <NavBar />
                {children}
            </div>
        </div>
    );
}
