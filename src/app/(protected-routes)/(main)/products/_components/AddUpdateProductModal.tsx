import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createProduct, updateProduct } from "@/services/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type AddProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateProductModal = (props: AddProductModalProps) => {
    const queryClient = useQueryClient();
    const {
        mutate: create,
        isPending: isPendingCreate,
        isSuccess: isSuccessCreate,
        isError: isErrorCreate,
    } = useMutation({
        mutationFn: createProduct,
        mutationKey: ["products"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });

    const {
        mutate: update,
        isPending: isPendingUpdate,
        isSuccess: isSuccessUpdate,
        isError: isErrorUpdate,
    } = useMutation({
        mutationFn: updateProduct,
        mutationKey: ["products"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });

    const [productHSN, setProductHSN] = useState("");
    const [productName, setProductName] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const [productSrp, setProductSrp] = useState("");
    const [productWlp, setProductWlp] = useState("");

    const reset = () => {
        setProductHSN("");
        setProductName("");
        setProductCompany("");
        setProductSrp("");
        setProductWlp("");
    };

    const handleProductSave = () => {
        if (props.data) {
            update({
                id: props.data?._id,
                name: productName,
                company: productCompany,
                srp: productSrp,
                wlp: productWlp,
                hsn: productHSN,
            });
        } else {
            create({
                name: productName,
                company: productCompany,
                srp: productSrp,
                wlp: productWlp,
                hsn: productHSN,
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
            setProductName(props.data.name);
            setProductCompany(props.data.company);
            setProductSrp(props.data.srp);
            setProductWlp(props.data.wlp);
            setProductHSN(props.data.hsn);
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
                        {props.data ? "Edit Product" : "Add Product"}
                    </DialogTitle>
                </DialogHeader>
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
                            <span className="text-xs font-semibold">SRP</span>
                            <Input
                                value={productSrp}
                                onChange={(e) => {
                                    setProductSrp(e.target.value);
                                }}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-semibold">WLP</span>
                            <Input
                                value={productWlp}
                                onChange={(e) => {
                                    setProductWlp(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <span className="text-xs font-semibold">
                            Product HSN
                        </span>
                        <Input
                            value={productHSN}
                            onChange={(e) => {
                                setProductHSN(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-full mt-4 flex justify-end">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={handleProductSave}
                        >
                            {isPendingCreate || isPendingUpdate
                                ? "Saving..."
                                : props.data
                                ? "Update"
                                : "Save"}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateProductModal;
