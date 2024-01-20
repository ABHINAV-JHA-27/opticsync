import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-row w-full">
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
