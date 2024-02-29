import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SelectProps = {
    data: string[];
    value: string;
    onChange: (value: string) => void;
};

const Select = (props: SelectProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <DropdownMenuLabel>{props.value || "Open"}</DropdownMenuLabel>
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
