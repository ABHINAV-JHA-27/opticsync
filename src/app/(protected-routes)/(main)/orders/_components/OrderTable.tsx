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
import AddUpdateOrderModal from "./AddUpdateOrderModal";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@/services/order";
import Lottie from "lottie-react";
import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";

const OrderTable = () => {
    const {
        data: orderData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: getOrder,
    });

    const [openAddOrderModal, setOpenAddOrderModal] = useState(false);

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
                        setOpenAddOrderModal(true);
                    }}
                >
                    Add +
                </Button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {orderData && orderData.length > 0 ? (
                <ScrollArea className="w-full h-[50vh] mt-4 rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {/* <TableHead>Name</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>WLP</TableHead>
                            <TableHead>SRP</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orderData.map((item: any) => (
                                <TableRow>
                                    {/* <TableCell>{item.name}</TableCell>
                                <TableCell>{item.company}</TableCell>
                                <TableCell>{item.wlp}</TableCell>
                                <TableCell>{item.srp}</TableCell> */}
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
                        No Orders Found
                    </p>
                </div>
            )}
            <AddUpdateOrderModal
                isOpen={openAddOrderModal}
                onClose={() => {
                    setOpenAddOrderModal(false);
                }}
            />
        </>
    );
};

export default OrderTable;
