"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { getCustomers } from "@/services/customer";
import { getProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

type ShowOrderDetailsProps = {
    isOpen: boolean;
    onClose: () => void;
    order: any;
};

const ShowOrderDetails = (props: ShowOrderDetailsProps) => {
    const { data: productsData } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { data: customersData } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    return (
        <Dialog
            open={props.isOpen}
            onOpenChange={() => {
                props.onClose();
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                </DialogHeader>
                <div className="w-full mt-2">
                    <span className="font-bold">Right Eye</span>
                    <div className="flex flex-row items-center gap-x-2 w-full mt-1 mb-2">
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Sph</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.r?.sph}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Cyl</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.r?.cyl}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Axis</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.r?.axis || "N/A"}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Add</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.r?.add || "N/A"}
                            </span>
                        </div>
                    </div>
                    <span className="font-bold">Left Eye</span>
                    <div className="flex flex-row items-center gap-x-2 w-full mt-1">
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Sph</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.l?.sph}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Cyl</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.l?.cyl}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Axis</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.l?.axis || "N/A"}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Add</span>
                            <br />
                            <span className="text-xs">
                                {props.order?.l?.add || "N/A"}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 w-full mt-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Customer</span>
                            <br />
                            <span className="text-xs">
                                {
                                    customersData?.find(
                                        (cust: any) =>
                                            cust?._id === props.order?.customer
                                    )?.shopName
                                }
                            </span>
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Product</span>
                            <br />
                            <span className="text-xs">
                                {
                                    productsData?.find(
                                        (pr: any) =>
                                            pr?._id === props.order?.products
                                    )?.name
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShowOrderDetails;
