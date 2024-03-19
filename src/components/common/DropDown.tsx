"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
    Command,
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
    placeholder?: string;
    for?: string;
    disabled?: boolean;
};

export function DropDown(props: DropDownProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                    disabled={props.disabled || false}
                >
                    {props.value !== "" ? props.value : props.placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandGroup>
                        {props.data.length > 0 ? (
                            <>
                                <CommandInput
                                    placeholder={
                                        "Search a " + (props.for || "option")
                                    }
                                    value={search}
                                    onValueChange={setSearch}
                                />
                                <ScrollArea className="max-h-[25vh] overflow-auto">
                                    {props.data
                                        .filter((item) => {
                                            return item
                                                .toLowerCase()
                                                .includes(search.toLowerCase());
                                        })
                                        .map((item) => (
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
                                </ScrollArea>
                            </>
                        ) : (
                            <CommandItem disabled>
                                No data found. Add a {props.for || "option"} to
                                see it here.
                            </CommandItem>
                        )}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
