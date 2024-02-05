import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-row w-full bg-[#E9EAE7]">
                    <SideBar />
                    <div className="w-full flex flex-col">
                        <NavBar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
