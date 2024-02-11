"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import AddUpdateCustomerModal from "./AddUpdateCustomerModal";

const CustomerTable = () => {
    const [customersData, setCustomersData] = useState([
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
        {
            name: "Sanjay",
            shop: "Sanjay Opticals",
            location: "Motijheel Pull ke pass, Muzaffarpur, Bihar, India",
            current_dues: "3,00,000",
        },
    ]);

    const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between mt-5">
                <Input
                    type="text"
                    className="px-3 py-2 w-80"
                    placeholder="Search..."
                />
                <Button
                    className="w-[15%]"
                    onClick={() => {
                        setOpenAddCustomerModal(true);
                    }}
                >
                    Add +
                </Button>
            </div>
            <ScrollArea className="w-full h-[50vh] mt-4 rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Shop</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Current Balance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customersData.map((item) => (
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.shop}</TableCell>
                                <TableCell>{item.location}</TableCell>
                                <TableCell>{item.current_dues}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
            <AddUpdateCustomerModal
                isOpen={openAddCustomerModal}
                onClose={() => setOpenAddCustomerModal(false)}
            />
        </>
    );
};

export default CustomerTable;
