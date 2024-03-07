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
import { deleteProduct, getProducts } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import AddUpdateProductModal from "./AddUpdateProductModal";
import Lottie from "lottie-react";
import * as NoDataAnimation from "@/assets/lottie/NoDataFound.json";

const ProductTable = () => {
    const queryclient = useQueryClient();

    const {
        data: productsData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { mutate: deleteCustomerMutation } = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });

    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const handleEdit = async (id: string) => {
        const product = productsData.find((product: any) => product._id === id);
        setSelectedProduct(product);
        setOpenAddProductModal(true);
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
                />
                <Button
                    className="w-[15%]"
                    onClick={() => {
                        setOpenAddProductModal(true);
                    }}
                >
                    Add +
                </Button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {productsData && productsData.length > 0 ? (
                <ScrollArea className="w-full h-[50vh] mt-4 rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>HSN</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>WLP</TableHead>
                                <TableHead>SRP</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {productsData.map((item: any) => (
                                <TableRow>
                                    <TableCell>{item.hsn || "N/A"}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.company}</TableCell>
                                    <TableCell>{item.wlp}</TableCell>
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
                        No Products Found
                    </p>
                </div>
            )}
            <AddUpdateProductModal
                isOpen={openAddProductModal}
                onClose={() => {
                    setOpenAddProductModal(false);
                    setSelectedProduct(null);
                }}
                data={selectedProduct}
            />
        </>
    );
};

export default ProductTable;
