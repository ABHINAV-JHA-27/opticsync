import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createCustomer, updateCustomer } from "@/services/customer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type AddUpdateCustomerModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateCustomerModal = (props: AddUpdateCustomerModalProps) => {
    const queryClient = useQueryClient();

    const {
        mutate: create,
        isPending: isPendingCreate,
        isSuccess: isSuccessCreate,
        isError: isErrorCreate,
    } = useMutation({
        mutationFn: createCustomer,
        mutationKey: ["customers"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"],
            });
        },
    });

    const {
        mutate: update,
        isPending: isPendingUpdate,
        isSuccess: isSuccessUpdate,
        isError: isErrorUpdate,
    } = useMutation({
        mutationFn: updateCustomer,
        mutationKey: ["customers"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"],
            });
            props.onClose();
        },
    });

    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddressLine1, setCustomerAddressLine1] = useState("");
    const [customerAddressLine2, setCustomerAddressLine2] = useState("");
    const [customerCity, setCustomerCity] = useState("");
    const [customerState, setCustomerState] = useState("");
    const [customerPincode, setCustomerPincode] = useState("");
    const [customerShopName, setCustomerShopName] = useState("");
    const [customerAlternatePhone, setCustomerAlternatePhone] = useState("");
    const [customerGstNumber, setCustomerGstNumber] = useState("");

    const reset = () => {
        setCustomerName("");
        setCustomerPhone("");
        setCustomerAddressLine1("");
        setCustomerAddressLine2("");
        setCustomerCity("");
        setCustomerState("");
        setCustomerPincode("");
        setCustomerShopName("");
        setCustomerAlternatePhone("");
        setCustomerGstNumber("");
    };

    const handleCustomerSave = () => {
        if (props.data) {
            update({
                id: props.data?._id,
                name: customerName,
                phone: customerPhone,
                addressLine1: customerAddressLine1,
                addressLine2: customerAddressLine2,
                city: customerCity,
                state: customerState,
                pincode: customerPincode,
                shopName: customerShopName,
                alternatePhone: customerAlternatePhone,
                gstNumber: customerGstNumber,
            });
        } else {
            create({
                name: customerName,
                phone: customerPhone,
                addressLine1: customerAddressLine1,
                addressLine2: customerAddressLine2,
                city: customerCity,
                state: customerState,
                pincode: customerPincode,
                shopName: customerShopName,
                alternatePhone: customerAlternatePhone,
                gstNumber: customerGstNumber,
            });
        }
        if (isSuccessCreate || isSuccessUpdate) {
            reset();
            props.onClose();
        } else if (isErrorCreate || isErrorUpdate) {
            console.log("Error");
        }
    };

    useEffect(() => {
        if (props.data) {
            setCustomerName(props.data.name);
            setCustomerPhone(props.data.phone);
            setCustomerAddressLine1(props.data.addressLine1);
            setCustomerAddressLine2(props.data.addressLine2);
            setCustomerCity(props.data.city);
            setCustomerState(props.data.state);
            setCustomerPincode(props.data.pincode);
            setCustomerShopName(props.data.shopName);
            setCustomerAlternatePhone(props.data.alternatePhone);
            setCustomerGstNumber(props.data.gstNumber);
        } else {
            reset();
        }
    }, [props.data]);

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
                </DialogHeader>
                <div className="w-full mt-2">
                    <div className="w-full">
                        <span className="text-xs font-bold">Customer Name</span>
                        <Input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <div className="w-full mt-2">
                        <span className="text-xs font-bold">Shop Name</span>
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
                            <span className="text-xs font-bold">City</span>
                            <Input
                                type="text"
                                value={customerCity}
                                onChange={(e) =>
                                    setCustomerCity(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Pincode</span>
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
                            <span className="text-xs font-bold">State</span>
                            <Input
                                type="text"
                                value={customerState}
                                onChange={(e) =>
                                    setCustomerState(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">GST</span>
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
                                    setCustomerAlternatePhone(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full mt-4 flex justify-end">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={handleCustomerSave}
                        >
                            {isPendingCreate || isPendingUpdate
                                ? "Saving..."
                                : props.data
                                ? "Update Customer"
                                : "Add Customer"}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateCustomerModal;
