import arrow from "@/assets/svg/arrowDown.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SelectProps = {
    data: string[];
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    classname?: string;
};

const Select = (props: SelectProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div
                    className={`rounded-[20px] p-[6px] px-[15px] border-[2px] border-[#EFEFF3] text-[14px] font-[500] font-DMSans  bg-[#FFFFFF] outline-none flex flex-row items-center gap-x-3 ${
                        props.classname ? props.classname : ""
                    }`}
                >
                    <span>
                        {props.value && props.value !== ""
                            ? props.value
                            : props.placeholder}
                    </span>
                    <img src={arrow.src} alt="arrow" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {props.data.map((item) => (
                    <DropdownMenuItem
                        onClick={() => {
                            props.onChange(item);
                        }}
                    >
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Select;
