"use client";

import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";
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
import { getCustomers } from "@/services/customer";
import { getPayments } from "@/services/payments";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useState } from "react";

const PaymentTable = () => {
    const [searchText, setSearchText] = useState("");
    const {
        data: paymentsData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["payments"],
        queryFn: getPayments,
    });

    const { data: CustomersData } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    return (
        <>
            <div className="flex items-center justify-between mt-5">
                <Input
                    type="text"
                    className="px-3 py-2 w-80"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {paymentsData && paymentsData.length > 0 ? (
                <ScrollArea className="w-full h-[50vh] mt-4 rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Payment Mode</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paymentsData
                                .filter((item: any) => {
                                    if (searchText === "") {
                                        return item;
                                    } else if (
                                        CustomersData?.find(
                                            (customer: any) =>
                                                customer._id === item.customer
                                        )
                                            ?.name.toLowerCase()
                                            .includes(searchText.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                })
                                .map((item: any) => (
                                    <TableRow>
                                        <TableCell>
                                            {new Date(
                                                item.date
                                            ).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>
                                            {CustomersData?.find(
                                                (customer: any) =>
                                                    customer._id ===
                                                    item.customer
                                            )?.name || "N/A"}
                                        </TableCell>
                                        <TableCell>{item.amount}</TableCell>
                                        <TableCell>
                                            {item.paymentMode}
                                        </TableCell>
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
                        No Products Found
                    </p>
                </div>
            )}
        </>
    );
};

export default PaymentTable;
