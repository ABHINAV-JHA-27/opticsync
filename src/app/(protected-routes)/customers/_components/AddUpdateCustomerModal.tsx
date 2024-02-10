import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type AddUpdateCustomerModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateCustomerModal = (props: AddUpdateCustomerModalProps) => {
    const [customerName, setCustomerName] = useState(
        props.data ? props.data.name : ""
    );
    const [customerPhone, setCustomerPhone] = useState(
        props.data ? props.data.phone : ""
    );
    const [customerAddressLine1, setCustomerAddressLine1] = useState(
        props.data ? props.data.addressLine1 : ""
    );
    const [customerAddressLine2, setCustomerAddressLine2] = useState(
        props.data ? props.data.addressLine2 : ""
    );
    const [customerCity, setCustomerCity] = useState(
        props.data ? props.data.city : ""
    );
    const [customerState, setCustomerState] = useState(
        props.data ? props.data.state : ""
    );
    const [customerPincode, setCustomerPincode] = useState(
        props.data ? props.data.pincode : ""
    );
    const [customerShopName, setCustomerShopName] = useState(
        props.data ? props.data.shopName : ""
    );
    const [customerAlternatePhone, setCustomerAlternatePhone] = useState(
        props.data ? props.data.alternatePhone : ""
    );
    const [customerGstNumber, setCustomerGstNumber] = useState(
        props.data ? props.data.gstNumber : ""
    );

    const handleCustomerSave = () => {
        if (props.data) {
            // Update Customer
        } else {
            // Add Customer
        }
        console.log({
            customerName,
            customerPhone,
            customerAddressLine1,
            customerAddressLine2,
            customerCity,
            customerState,
            customerPincode,
            customerShopName,
            customerAlternatePhone,
            customerGstNumber,
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
                    <DialogTitle>
                        {props.data ? "Edit Customer" : "Add Customer"}
                    </DialogTitle>
                    <DialogDescription>
                        <div className="w-full mt-2">
                            <div className="w-full">
                                <span className="text-xs font-bold">
                                    Customer Name
                                </span>
                                <Input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) =>
                                        setCustomerName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full mt-2">
                                <span className="text-xs font-bold">
                                    Shop Name
                                </span>
                                <Input
                                    type="text"
                                    value={customerShopName}
                                    onChange={(e) =>
                                        setCustomerShopName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full mt-2">
                                <span className="text-xs font-bold">
                                    Address Line 1
                                </span>
                                <Input
                                    type="text"
                                    value={customerAddressLine1}
                                    onChange={(e) =>
                                        setCustomerAddressLine1(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full mt-2">
                                <span className="text-xs font-bold">
                                    Address Line 2
                                </span>
                                <Input
                                    type="text"
                                    value={customerAddressLine2}
                                    onChange={(e) =>
                                        setCustomerAddressLine2(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full mt-2 flex flex-row items-center gap-x-2">
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        City
                                    </span>
                                    <Input
                                        type="text"
                                        value={customerCity}
                                        onChange={(e) =>
                                            setCustomerCity(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        Pincode
                                    </span>
                                    <Input
                                        type="text"
                                        value={customerPincode}
                                        onChange={(e) =>
                                            setCustomerPincode(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-2 flex flex-row items-center gap-x-2">
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        State
                                    </span>
                                    <Input
                                        type="text"
                                        value={customerState}
                                        onChange={(e) =>
                                            setCustomerState(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        GST
                                    </span>
                                    <Input
                                        type="text"
                                        value={customerGstNumber}
                                        onChange={(e) =>
                                            setCustomerGstNumber(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-2 flex flex-row items-center gap-x-2">
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        Phone Number
                                    </span>
                                    <Input
                                        type="text"
                                        value={customerPhone}
                                        onChange={(e) =>
                                            setCustomerPhone(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        Alternate Phone Number
                                    </span>
                                    <Input
                                        type="text"
                                        value={customerAlternatePhone}
                                        onChange={(e) =>
                                            setCustomerAlternatePhone(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-4 flex justify-end">
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded-md"
                                    onClick={handleCustomerSave}
                                >
                                    {props.data
                                        ? "Update Customer"
                                        : "Add Customer"}
                                </button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateCustomerModal;
