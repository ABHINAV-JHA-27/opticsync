"use client";
import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";
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
import { deleteCustomer, getCustomers } from "@/services/customer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useState } from "react";
import AddUpdateCustomerModal from "./AddUpdateCustomerModal";
import ShowCustomerDetails from "./ShowCustomerDetails";

const CustomerTable = () => {
    const queryclient = useQueryClient();

    const {
        data: customersData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    const { mutate: deleteCustomerMutation } = useMutation({
        mutationFn: deleteCustomer,
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: ["customers"],
            });
        },
    });

    const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);
    const [openShowCustomerDetails, setOpenShowCustomerDetails] =
        useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
    const [search, setSearch] = useState("");

    const handleEdit = async (id: string) => {
        const customer = customersData.find(
            (customer: any) => customer._id === id
        );
        setSelectedCustomer(customer);
        setOpenAddCustomerModal(true);
    };

    const handleDelete = async (id: string) => {
        await deleteCustomerMutation(id);
    };

    return (
        <>
            <div className="flex items-center justify-between mt-5">
                <Input
                    type="text"
                    className="px-3 py-2 w-80"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                <ScrollArea className="w-full h-[50vh] mt-4 rounded-md z-[2]">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Shop</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Current Balance</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customersData
                                .filter((customer: any) => {
                                    if (
                                        customer.name
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        customer.shopName
                                            .toLowerCase()
                                            .includes(search.toLowerCase()) ||
                                        customer.city
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                    ) {
                                        return customer;
                                    }
                                })
                                .map((item: any) => (
                                    <TableRow
                                        onClick={() => {
                                            setSelectedCustomer(item);
                                            setOpenShowCustomerDetails(true);
                                        }}
                                    >
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.shopName}</TableCell>
                                        <TableCell>{item.city}</TableCell>
                                        <TableCell>
                                            {item.currentBalance}
                                        </TableCell>
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
                        No Customers Found
                    </p>
                </div>
            )}
            <AddUpdateCustomerModal
                isOpen={openAddCustomerModal}
                onClose={() => {
                    setOpenAddCustomerModal(false);
                    setSelectedCustomer(null);
                }}
                data={selectedCustomer}
            />
            <ShowCustomerDetails
                isOpen={openShowCustomerDetails}
                onClose={() => {
                    setOpenShowCustomerDetails(false);
                    setSelectedCustomer(null);
                }}
                customer={selectedCustomer}
            />
        </>
    );
};

export default CustomerTable;
