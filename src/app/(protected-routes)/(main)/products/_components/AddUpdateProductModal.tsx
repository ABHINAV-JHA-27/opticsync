import Loader from "@/components/common/Loader";
import {
    Dialog,
    DialogContent,
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
    const { mutate: create, isPending: isPendingCreate } = useMutation({
        mutationFn: createProduct,
        mutationKey: ["products"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            reset();
            props.onClose();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: update, isPending: isPendingUpdate } = useMutation({
        mutationFn: updateProduct,
        mutationKey: ["products"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            reset();
            props.onClose();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const [productHSN, setProductHSN] = useState("");
    const [productIndex, setProductIndex] = useState("");
    const [productName, setProductName] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const [productWlp, setProductWlp] = useState("");
    const [productCGst, setProductCGst] = useState(6);
    const [productSGst, setProductSGst] = useState(6);

    const reset = () => {
        setProductHSN("");
        setProductName("");
        setProductCompany("");
        setProductWlp("");
        setProductCGst(6);
        setProductSGst(6);
        setProductIndex("");
    };

    const handleProductSave = () => {
        const data = {
            name: productName,
            company: productCompany,
            price: productWlp,
            hsn: productHSN,
            cgst: productCGst,
            sgst: productSGst,
            index: productIndex,
        };

        if (props.data) {
            update({
                id: props.data?._id,
                value: data,
            });
        } else {
            create(data);
        }
    };

    useEffect(() => {
        if (props.data) {
            setProductName(props.data.name);
            setProductCompany(props.data.company);
            setProductWlp(props.data.price);
            setProductHSN(props.data.hsn);
            setProductCGst(props.data.cgst);
            setProductSGst(props.data.sgst);
            setProductIndex(props.data.index);
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
                            <span className="text-xs font-semibold">
                                Product Index
                            </span>
                            <Input
                                value={productIndex}
                                onChange={(e) => {
                                    setProductIndex(e.target.value);
                                }}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-semibold">Price</span>
                            <Input
                                value={productWlp}
                                onChange={(e) => {
                                    setProductWlp(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center mt-2 gap-x-2">
                        <div className="w-1/2">
                            <span className="text-xs font-semibold">
                                Product CGST
                            </span>
                            <Input
                                value={productCGst}
                                onChange={(e) => {
                                    setProductCGst(
                                        parseInt(e.target.value) || 0
                                    );
                                }}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-semibold">
                                Product SGST
                            </span>
                            <Input
                                value={productSGst}
                                onChange={(e) => {
                                    setProductSGst(
                                        parseInt(e.target.value) || 0
                                    );
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
                            {isPendingCreate || isPendingUpdate ? (
                                <div className="flex items-center justify-center">
                                    <Loader heavy />
                                </div>
                            ) : props.data ? (
                                "Update"
                            ) : (
                                "Save"
                            )}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateProductModal;
