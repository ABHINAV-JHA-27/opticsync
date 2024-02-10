import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type AddProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateProductModal = (props: AddProductModalProps) => {
    const [productName, setProductName] = useState(
        props.data ? props.data.name : ""
    );
    const [productCompany, setProductCompany] = useState(
        props.data ? props.data.company : ""
    );
    const [productSrp, setProductSrp] = useState(
        props.data ? props.data.srp : ""
    );
    const [productWlp, setProductWlp] = useState(
        props.data ? props.data.wlp : ""
    );

    const handleProductSave = () => {
        if (props.data) {
            // Update Product
        } else {
            // Add Product
        }
        console.log({
            productName,
            productCompany,
            productSrp,
            productWlp,
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
                        {props.data ? "Edit Product" : "Add Product"}
                    </DialogTitle>
                    <DialogDescription>
                        <div className="w-full mt-2">
                            <div className="w-full">
                                <span className="text-xs font-semibold">
                                    Product Name
                                </span>
                                <Input
                                    value={productName}
                                    onChange={(e) => {
                                        setProductName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="w-full mt-2">
                                <span className="text-xs font-semibold">
                                    Product Company
                                </span>
                                <Input
                                    value={productCompany}
                                    onChange={(e) => {
                                        setProductCompany(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-row items-center mt-2 gap-x-2">
                                <div className="w-1/2">
                                    <span className="text-xs font-semibold">
                                        SRP
                                    </span>
                                    <Input
                                        value={productSrp}
                                        onChange={(e) => {
                                            setProductSrp(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <span className="text-xs font-semibold">
                                        WLP
                                    </span>
                                    <Input
                                        value={productWlp}
                                        onChange={(e) => {
                                            setProductWlp(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-4 flex justify-end">
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded-md"
                                    onClick={handleProductSave}
                                >
                                    {props.data
                                        ? "Update Product"
                                        : "Add Product"}
                                </button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateProductModal;
