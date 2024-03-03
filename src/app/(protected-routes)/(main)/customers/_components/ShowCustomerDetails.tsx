"use client";

import html2pdf from "html2pdf.js";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type ShowCustomerDetailsProps = {
    isOpen: boolean;
    onClose: () => void;
    customer: any;
};

const ShowCustomerDetails = (props: ShowCustomerDetailsProps) => {
    const handleGenerateChallan = async () => {
        let data = await fetch("/api/challans", {
            method: "POST",
            body: JSON.stringify({
                customer: props.customer._id,
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

    const handleGenerateInvoice = async () => {
        let data = await fetch("/api/invoices", {
            method: "POST",
            body: JSON.stringify({
                customer: props.customer._id,
                startDate: new Date(),
                endDate: new Date(),
            }),
        });
        data = await data.json();
        data = (data as any).data;
        await html2pdf(data, {
            margin: 10,
            filename: "invoice.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        });
    };

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
                            onClick={handleGenerateChallan}
                        >
                            Generate Invoice
                        </button>
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={handleGenerateInvoice}
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
