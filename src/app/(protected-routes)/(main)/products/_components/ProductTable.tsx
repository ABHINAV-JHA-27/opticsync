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
import { getProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AddUpdateProductModal from "./AddUpdateProductModal";

const ProductTable = () => {
    const {
        data: productsData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const [openAddProductModal, setOpenAddProductModal] = useState(false);

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
                                <TableHead>Name</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>WLP</TableHead>
                                <TableHead>SRP</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {productsData.map((item: any) => (
                                <TableRow>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.company}</TableCell>
                                    <TableCell>{item.wlp}</TableCell>
                                    <TableCell>{item.srp}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            ) : (
                <p>No products available</p>
            )}
            <AddUpdateProductModal
                isOpen={openAddProductModal}
                onClose={() => {
                    setOpenAddProductModal(false);
                }}
            />
        </>
    );
};

export default ProductTable;