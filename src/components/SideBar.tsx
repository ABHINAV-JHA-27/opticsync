"use client";

import { usePathname } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SidebarItem from "./common/SidebarItem";
import {
    Container,
    Home,
    IndianRupee,
    LayoutDashboard,
    Package,
    UserCircle,
    Users,
} from "lucide-react";

const SideBar = () => {
    const pathname = usePathname();
    return (
        <div
            className={`flex flex-col bg-[#ECE6F0]  w-[20vw] h-screen sticky top-0 justify-between text-[#625D67]`}
        >
            <div className="space-y-3">
                <div className="flex items-center justify-center p-4">
                    <h2 className="text-xl font-bold">OpticSync</h2>
                </div>
                <div className="flex-1 mt-6">
                    <ul className="pt-4 pb-4 space-y-3">
                        <SidebarItem
                            text="Dashboard"
                            icon={<LayoutDashboard size={24} />}
                            active={pathname === "/dashboard"}
                            href="/dashboard"
                        />
                        <SidebarItem
                            text="Orders"
                            icon={<Container size={24} />}
                            active={pathname === "/orders"}
                            href="/orders"
                        />
                        <SidebarItem
                            text="Products"
                            icon={<Package size={24} />}
                            active={pathname === "/products"}
                            href="/products"
                        />
                        <SidebarItem
                            text="Customers"
                            icon={<Users size={24} />}
                            active={pathname === "/customers"}
                            href="/customers"
                        />
                        <SidebarItem
                            text="Payment"
                            icon={<IndianRupee size={24} />}
                            active={pathname === "/payment"}
                            href="/payment"
                        />
                        <SidebarItem
                            text="Profile"
                            icon={<UserCircle size={24} />}
                            active={pathname === "/profile"}
                            href="/profile"
                        />
                    </ul>
                </div>
            </div>
            <ul className="pt-2 pb-4 space-y-1">
                <SidebarItem
                    text="Log Out"
                    icon={<Home size={24} />}
                    href="/api/auth/logout"
                    active={true}
                />
            </ul>
        </div>
    );
};

export default SideBar;
