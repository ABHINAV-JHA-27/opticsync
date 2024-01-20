"use client";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-row items-center justify-between m-4">
            {pathname === "/dashboard" && (
                <span className="text-[24px] font-bold leading-none">
                    Dashboard
                </span>
            )}
            {pathname === "/orders" && (
                <span className="text-[24px] font-bold leading-none">
                    Orders
                </span>
            )}
            {pathname === "/customers" && (
                <span className="text-[24px] font-bold leading-none">
                    Customers
                </span>
            )}
            {pathname === "/products" && (
                <span className="text-[24px] font-bold leading-none">
                    Products
                </span>
            )}
            {pathname === "/stocks" && (
                <span className="text-[24px] font-bold leading-none">
                    Stocks
                </span>
            )}
        </div>
    );
};

export default NavBar;
