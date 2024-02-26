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
import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "@/services/customer";
import Lottie from "lottie-react";
import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";

const CustomerTable = () => {
    const {
        data: customersData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

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
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {customersData && customersData.length > 0 ? (
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
                            {customersData.map((item: any) => (
                                <TableRow>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.shopName}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.current_dues}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            ) : (
                <div className="flex flex-col justify-center items-center bg-[#ffffff] border-[2px] border-[#EFEFF3] mt-4 rounded-2xl p-[20px]">
                    <Lottie
                        animationData={NoDataAnimation}
                        loop={true}
                        width={400}
                        height={400}
                    />
                    <p className="text-[#9DA0A7] text-[16px] font-bold mt-5">
                        No Customers Found
                    </p>
                </div>
            )}
            <AddUpdateCustomerModal
                isOpen={openAddCustomerModal}
                onClose={() => setOpenAddCustomerModal(false)}
            />
        </>
    );
};

export default CustomerTable;
