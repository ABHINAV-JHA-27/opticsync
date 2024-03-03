"use client";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-row items-center justify-between p-4 bg-[#ffffff]">
            {pathname === "/dashboard" && (
                <span className="text-[24px] font-[600] leading-none">
                    Dashboard
                </span>
            )}
            {pathname === "/orders" && (
                <span className="text-[24px] font-[600] leading-none">
                    Orders
                </span>
            )}
            {pathname === "/customers" && (
                <span className="text-[24px] font-[600] leading-none">
                    Customers
                </span>
            )}
            {pathname === "/products" && (
                <span className="text-[24px] font-[600] leading-none">
                    Products
                </span>
            )}
            {pathname === "/stocks" && (
                <span className="text-[24px] font-[600] leading-none">
                    Stocks
                </span>
            )}
        </div>
    );
};

export default NavBar;
