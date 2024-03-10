"use client";

import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";
import Select from "@/components/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import html2pdf from "html2pdf.js";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getCustomers } from "@/services/customer";
import { changeOrderStatus, deleteOrder, getOrder } from "@/services/order";
import { getProducts } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useState } from "react";
import AddUpdateOrderModal from "./AddUpdateOrderModal";
import ShowOrderDetails from "./ShowOrderDetails";

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

    const { data: productsData } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { data: customersData } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    const [openAddOrderModal, setOpenAddOrderModal] = useState(false);
    const [openShowOrderDetails, setOpenShowOrderDetails] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const { mutate: deleteOrderMutation } = useMutation({
        mutationFn: deleteOrder,
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: ["orders"],
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: changeStatus } = useMutation({
        mutationFn: changeOrderStatus,
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: ["orders"],
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleGenerateChallan = async (id: string) => {
        let data = await fetch("/api/challans", {
            method: "POST",
            body: JSON.stringify({
                orderID: id,
            }),
        });
        data = await data.json();
        data = (data as any).data;
        await html2pdf(data, {
            margin: 10,
            filename: "challan.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        });
    };

    const handleChangeStatus = async (id: string, status: string) => {
        await changeStatus({ id, status });
    };

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
                        setSelectedOrder(null);
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
                                <TableHead>Status</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Note</TableHead>
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
                                    <TableRow
                                        onClick={() => {
                                            setSelectedOrder(item);
                                            setOpenShowOrderDetails(true);
                                        }}
                                    >
                                        <TableCell>
                                            <Select
                                                data={[
                                                    "Pending",
                                                    "Ordered",
                                                    "Delivered",
                                                    "Cancelled",
                                                    "Received",
                                                ]}
                                                value={
                                                    item.status
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                    item.status.slice(1)
                                                }
                                                onChange={(value) => {
                                                    handleChangeStatus(
                                                        item._id,
                                                        value
                                                    );
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {
                                                productsData?.find(
                                                    (pr: any) =>
                                                        pr?._id ===
                                                        item.products
                                                )?.name
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {
                                                customersData?.find(
                                                    (cust: any) =>
                                                        cust?._id ===
                                                        item.customer
                                                )?.shopName
                                            }
                                        </TableCell>
                                        <TableCell>{item.srp}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-row items-center gap-x-4">
                                                <Button
                                                    className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] w-20 h-8 z-[5]"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleEdit(item._id);
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] w-20 h-8 z-[5]"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDelete(item._id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] h-8 z-[5]"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleGenerateChallan(
                                                            item._id
                                                        );
                                                    }}
                                                >
                                                    Generate Challan
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
                    setSelectedOrder(null);
                    setOpenAddOrderModal(false);
                }}
                data={selectedOrder}
            />
            <ShowOrderDetails
                isOpen={openShowOrderDetails}
                onClose={() => {
                    setOpenShowOrderDetails(false);
                    setSelectedOrder(null);
                }}
                order={selectedOrder}
            />
        </>
    );
};

export default OrderTable;
