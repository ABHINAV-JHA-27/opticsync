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
                    {children}
                </div>
            </body>
        </html>
    );
}
