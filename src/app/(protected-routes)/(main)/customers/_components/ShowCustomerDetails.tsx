"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useEffect } from "react";

type ShowCustomerDetailsProps = {
    isOpen: boolean;
    onClose: () => void;
    customer: any;
};

const ShowCustomerDetails = (props: ShowCustomerDetailsProps) => {
    return (
        <Dialog
            open={props.isOpen}
            onOpenChange={() => {
                props.onClose();
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{props.customer?.shopName}</DialogTitle>
                </DialogHeader>
                <div className="w-full mt-2">
                    <div className="w-full">
                        <span className="text-xs font-bold">Customer Name</span>
                        <p>{props.customer?.name}</p>
                    </div>

                    <div className="w-full mt-2">
                        <span className="text-xs font-bold">
                            Address Line 1
                        </span>
                        <p>{props.customer?.addressLine1}</p>
                    </div>
                    <div className="w-full mt-2">
                        <span className="text-xs font-bold">
                            Address Line 2
                        </span>
                        <p>{props.customer?.addressLine2}</p>
                    </div>
                    <div className="w-full mt-2 flex flex-row items-center gap-x-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">City</span>
                            <p>{props.customer?.city}</p>
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Pincode</span>
                            <p>{props.customer?.pincode}</p>
                        </div>
                    </div>
                    <div className="w-full mt-2 flex flex-row items-center gap-x-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">State</span>
                            <p>{props.customer?.state}</p>
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">GST</span>
                            <p>{props.customer?.gstNumber}</p>
                        </div>
                    </div>
                    <div className="w-full mt-2 flex flex-row items-center gap-x-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">
                                Phone Number
                            </span>
                            <p>{props.customer?.phone}</p>
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">
                                Alternate Phone Number
                            </span>
                            <p>{props.customer?.alternatePhone}</p>
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <span className="text-xs font-bold">
                            Current Balance
                        </span>
                        <p>{props.customer?.currentBalance}</p>
                    </div>
                    <div className="w-full mt-4 flex justify-between items-center ">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            // onClick={handleCustomerSave}
                        >
                            Generate Invoice
                        </button>
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            // onClick={handleCustomerSave}
                        >
                            Generate Todays Challan
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShowCustomerDetails;
