"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type DropDownProps = {
    data: string[];
    value: string;
    onChange: (value: string) => void;
};

export function DropDown(props: DropDownProps) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {props.value !== "" ? props.value : "Select framework..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder="Search framework..."
                        value={props.value}
                    />
                    <CommandEmpty>No data found.</CommandEmpty>
                    <CommandGroup>
                        {props.data.map((item) => (
                            <CommandItem
                                key={item}
                                value={item}
                                onSelect={(currentValue) => {
                                    props.onChange(item);
                                    setOpen(false);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4 text-black",
                                        props.value === item
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {item}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
