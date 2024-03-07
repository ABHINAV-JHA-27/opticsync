"use client";

import html2pdf from "html2pdf.js";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DropDown } from "@/components/DropDown";
import Select from "@/components/Select";
import { DatePicker } from "@/components/DatePicker";

type ShowCustomerDetailsProps = {
    isOpen: boolean;
    onClose: () => void;
    customer: any;
};

const ShowCustomerDetails = (props: ShowCustomerDetailsProps) => {
    const [addPaymentModal, setAddPaymentModal] = useState(false);
    const [generateInvoiceModal, setGenerateInvoiceModal] = useState(false);

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
                    <div className="w-full flex flex-row items-center">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">
                                Customer Name
                            </span>
                            <p>{props.customer?.name}</p>
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">
                                Current Balance
                            </span>
                            <p>{props.customer?.currentBalance}</p>
                        </div>
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
                    <div className="w-full mt-4 flex justify-between items-center ">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={() => setAddPaymentModal(true)}
                        >
                            Add Payment
                        </button>
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={() => setGenerateInvoiceModal(true)}
                        >
                            Generate Invoice
                        </button>
                    </div>
                </div>
            </DialogContent>
            <AddPaymentModal
                isOpen={addPaymentModal}
                onClose={() => setAddPaymentModal(false)}
                customer={props.customer}
            />
            <GenerateInvoiceModal
                isOpen={generateInvoiceModal}
                onClose={() => setGenerateInvoiceModal(false)}
                customer={props.customer}
            />
        </Dialog>
    );
};

const AddPaymentModal = (props: {
    isOpen: boolean;
    onClose: () => void;
    customer: any;
}) => {
    const [paymentMode, setPaymentMode] = useState<"cash" | "cheque" | "upi">(
        "cash"
    );
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());

    const handleAddPayment = async () => {
        props.onClose();
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
                    <DialogTitle>Add Payment</DialogTitle>
                </DialogHeader>
                <div className="w-full mt-2">
                    <div className="w-full flex flex-row items-center gap-x-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Amount</span>
                            <Input
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={amount}
                                onChange={(e) =>
                                    setAmount(parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Date</span>
                            <DatePicker date={date} setDate={setDate} />
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <p className="text-xs font-bold">Payment Mode</p>
                        <Select
                            value={paymentMode}
                            data={["cash", "cheque", "upi"]}
                            onChange={(value) => setPaymentMode(value as any)}
                        />
                    </div>
                    <div className="w-full mt-4 flex justify-end items-center ">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={handleAddPayment}
                        >
                            Add Payment
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const GenerateInvoiceModal = (props: {
    isOpen: boolean;
    onClose: () => void;
    customer: any;
}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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

        props.onClose();
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
                    <DialogTitle>Generate Invoice</DialogTitle>
                </DialogHeader>
                <div className="w-full mt-2">
                    <div className="w-full flex flex-row items-center gap-x-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">
                                Start Date
                            </span>
                            <DatePicker
                                date={startDate}
                                setDate={setStartDate}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">End Date</span>
                            <DatePicker date={endDate} setDate={setEndDate} />
                        </div>
                    </div>
                    <div className="w-full mt-4 flex justify-end items-center ">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={handleGenerateInvoice}
                        >
                            Generate Invoice
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShowCustomerDetails;
