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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteOrder, getOrder } from "@/services/order";
import Lottie from "lottie-react";
import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";

const OrderTable = () => {
    const queryclient = useQueryClient();

    const {
        data: orderData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: getOrder,
    });

    const [openAddOrderModal, setOpenAddOrderModal] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const { mutate: deleteOrderMutation } = useMutation({
        mutationFn: deleteOrder,
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: ["orders"],
            });
        },
    });

    const handleEdit = async (id: string) => {
        const order = orderData.find((order: any) => order._id === id);
        setSelectedOrder(order);
        setOpenAddOrderModal(true);
    };

    const handleDelete = async (id: string) => {
        await deleteOrderMutation(id);
    };

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
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orderData
                                .filter((order: any) => {
                                    // if (
                                    //     order.name
                                    //         .toLowerCase()
                                    //         .includes(search.toLowerCase())
                                    // ) {
                                    // }
                                    return order;
                                })
                                .map((item: any) => (
                                    <TableRow>
                                        {/* <TableCell>{item.name}</TableCell>
                                <TableCell>{item.company}</TableCell>
                                <TableCell>{item.wlp}</TableCell>
                                <TableCell>{item.srp}</TableCell> */}
                                        <TableCell>
                                            <div className="flex flex-row items-center gap-x-4">
                                                <Button
                                                    className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] w-20 h-8 z-[5]"
                                                    onClick={() => {
                                                        handleEdit(item._id);
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] w-20 h-8 z-[5]"
                                                    onClick={() => {
                                                        handleDelete(item._id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
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
                        No Orders Found
                    </p>
                </div>
            )}
            <AddUpdateOrderModal
                isOpen={openAddOrderModal}
                onClose={() => {
                    setOpenAddOrderModal(false);
                    setSelectedOrder(null);
                }}
                data={selectedOrder}
            />
        </>
    );
};

export default OrderTable;
