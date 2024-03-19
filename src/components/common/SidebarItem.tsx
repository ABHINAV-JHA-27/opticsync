import { cn } from "@/lib/utils";
import Link from "next/link";

type SidebarItemProps = {
    text: string;
    icon: React.ReactNode;
    active?: boolean;
    href: string;
    className?: string;
};
const SidebarItem = (props: SidebarItemProps) => {
    return (
        <li>
            <Link
                href={props.href}
                className={cn(
                    "flex items-center py-[10px] px-4 mx-2 gap-x-3 text-sm font-medium rounded-md hover:bg-[#F7F2F9] hover:text-black transition-all",
                    props.active ? "bg-[#F7F2F9] text-black rounded-[6px]" : "",
                    props.className || ""
                )}
            >
                {props.icon}
                <span>{props.text}</span>
            </Link>
        </li>
    );
};

export default SidebarItem;
