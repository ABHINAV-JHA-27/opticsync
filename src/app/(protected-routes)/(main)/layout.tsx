import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-row w-full">
            <SideBar />
            <div className="w-full flex flex-col h-screen">
                <NavBar />
                {children}
            </div>
        </div>
    );
}
