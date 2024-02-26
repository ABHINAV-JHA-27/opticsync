import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder, updateOrder } from "@/services/order";
import { getProducts } from "@/services/product";
import { getCustomers } from "@/services/customer";
import { DropDown } from "@/components/DropDown";

type AddUpdateOrderModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateOrderModal = (props: AddUpdateOrderModalProps) => {
    const queryClient = useQueryClient();
    const {
        mutate: create,
        isPending: isPendingCreate,
        isSuccess: isSuccessCreate,
        isError: isErrorCreate,
    } = useMutation({
        mutationFn: createOrder,
        mutationKey: ["orders"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
        },
    });

    const {
        mutate: update,
        isPending: isPendingUpdate,
        isSuccess: isSuccessUpdate,
        isError: isErrorUpdate,
    } = useMutation({
        mutationFn: updateOrder,
        mutationKey: ["orders"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
        },
    });

    const [rSph, setRSph] = useState(props.data ? props.data.r.sph : "");
    const [rCyl, setRCyl] = useState(props.data ? props.data.r.cyl : "");
    const [rAxis, setRAxis] = useState(props.data ? props.data.r.axis : "");
    const [rAdd, setRAdd] = useState(props.data ? props.data.r.add : "");
    const [lSph, setLSph] = useState(props.data ? props.data.l.sph : "");
    const [lCyl, setLCyl] = useState(props.data ? props.data.l.cyl : "");
    const [lAxis, setLAxis] = useState(props.data ? props.data.l.axis : "");
    const [lAdd, setLAdd] = useState(props.data ? props.data.l.add : "");
    const [status, setStatus] = useState(
        props.data ? props.data.status : "pending"
    );
    const [product, setProduct] = useState(
        props.data ? props.data.products : ""
    );
    const [customer, setCustomer] = useState(
        props.data ? props.data.customer : ""
    );

    const { data: productsData } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { data: customersData } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    const handleOrderSave = () => {
        if (props.data) {
            update({
                id: props.data.id,
                r: {
                    sph: rSph,
                    cyl: rCyl,
                    axis: rAxis,
                    add: rAdd,
                },
                l: {
                    sph: lSph,
                    cyl: lCyl,
                    axis: lAxis,
                    add: lAdd,
                },
                status: status,
                products: product,
                customer: customer,
            });
        } else {
            create({
                r: {
                    sph: rSph,
                    cyl: rCyl,
                    axis: rAxis,
                    add: rAdd,
                },
                l: {
                    sph: lSph,
                    cyl: lCyl,
                    axis: lAxis,
                    add: lAdd,
                },
                status: status,
                products: product,
                customer: customer,
            });
        }
        if (isSuccessCreate || isSuccessUpdate) {
            props.onClose();
        } else if (isErrorCreate || isErrorUpdate) {
            console.log("Error");
        }
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
                        {props.data ? "Update Order" : "Add Order"}
                    </DialogTitle>
                    <DialogDescription>
                        <div className="w-full mt-2">
                            <span className="font-bold">Right Eye</span>
                            <div className="flex flex-row items-center gap-x-2 w-full mt-1 mb-2">
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Sph
                                    </span>
                                    <Input
                                        value={rSph}
                                        onChange={(e) =>
                                            setRSph(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Cyl
                                    </span>
                                    <Input
                                        value={rCyl}
                                        onChange={(e) =>
                                            setRCyl(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Axis
                                    </span>
                                    <Input
                                        value={rAxis}
                                        onChange={(e) =>
                                            setRAxis(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Add
                                    </span>
                                    <Input
                                        value={rAdd}
                                        onChange={(e) =>
                                            setRAdd(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <span className="font-bold">Left Eye</span>
                            <div className="flex flex-row items-center gap-x-2 w-full mt-1">
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Sph
                                    </span>
                                    <Input
                                        value={lSph}
                                        onChange={(e) =>
                                            setLSph(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Cyl
                                    </span>
                                    <Input
                                        value={lCyl}
                                        onChange={(e) =>
                                            setLCyl(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Axis
                                    </span>
                                    <Input
                                        value={lAxis}
                                        onChange={(e) =>
                                            setLAxis(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/4">
                                    <span className="text-xs font-bold">
                                        Add
                                    </span>
                                    <Input
                                        value={lAdd}
                                        onChange={(e) =>
                                            setLAdd(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-x-2 w-full mt-2">
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        Customer
                                    </span>
                                    <DropDown
                                        data={customersData?.map(
                                            (customer: any) => customer.shopName
                                        )}
                                        value={customer}
                                        onChange={(e: string) => setCustomer(e)}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        Product
                                    </span>
                                    <DropDown
                                        data={productsData?.map(
                                            (product: any) => product.name
                                        )}
                                        value={product}
                                        onChange={(e: string) => setProduct(e)}
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-4 flex justify-end">
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded-md"
                                    onClick={handleOrderSave}
                                >
                                    {isPendingCreate || isPendingUpdate
                                        ? "Saving..."
                                        : props.data
                                        ? "Update Order"
                                        : "Add Order"}
                                </button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateOrderModal;
