import { cn } from "@/lib/utils";
import "@/components/common/styles/card.css";

type CardProps = {
    children: React.ReactNode;
    classname?: string;
};

const Card = (props: CardProps) => {
    return (
        <div
            className={cn(
                "w-full rounded-[24px] py-[32px] px-[16px] bg-card drop-shadow-[rgba(0, 0, 0, 0.24)]",
                props.classname
            )}
        >
            {props.children}
        </div>
    );
};

export default Card;
