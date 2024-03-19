import { DropDown } from "@/components/common/DropDown";
import Loader from "@/components/common/Loader";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getCustomers } from "@/services/customer";
import { createOrder, updateOrder } from "@/services/order";
import { getProducts } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type AddUpdateOrderModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateOrderModal = (props: AddUpdateOrderModalProps) => {
    const queryClient = useQueryClient();
    const { mutate: create, isPending: isPendingCreate } = useMutation({
        mutationFn: createOrder,
        mutationKey: ["orders"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            props.onClose();
            reset();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: update, isPending: isPendingUpdate } = useMutation({
        mutationFn: updateOrder,
        mutationKey: ["orders"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            props.onClose();
            reset();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const [ref, setRef] = useState("");
    const [rSph, setRSph] = useState("");
    const [rCyl, setRCyl] = useState("");
    const [rAxis, setRAxis] = useState("");
    const [rAdd, setRAdd] = useState("");
    const [lSph, setLSph] = useState("");
    const [lCyl, setLCyl] = useState("");
    const [lAxis, setLAxis] = useState("");
    const [lAdd, setLAdd] = useState("");
    const [status, setStatus] = useState("pending");
    const [product, setProduct] = useState<string>("");
    const [customer, setCustomer] = useState<string>("");
    const [note, setNote] = useState<string>("");
    const [type, setType] = useState("stock");

    const { data: productsData } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { data: customersData } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    const handleOrderSave = async () => {
        let data: any = {
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
            products: await productsData.find((pr: any) => product == pr.name)
                ?._id,
            customer: await customersData.find((cust: any) => {
                return cust.shopName == customer;
            })?._id,
            note: note,
            ref: ref,
            type: type.toLowerCase(),
            quantity: 2,
        };

        if (rSph === "" && rCyl === "") {
            let { r, ...rest } = data;
            data = {
                ...rest,
                quantity: 1,
            };
        }

        if (lSph === "" && lCyl === "") {
            let { l, ...rest } = data;
            data = {
                ...rest,
                quantity: 1,
            };
        }

        if (props.data) {
            update({
                id: props.data?._id,
                value: { ...data },
            });
        } else {
            create(data);
        }
    };

    const reset = () => {
        setRSph("");
        setRCyl("");
        setRAxis("");
        setRAdd("");
        setLSph("");
        setLCyl("");
        setLAxis("");
        setLAdd("");
        setStatus("pending");
        setProduct("");
        setCustomer("");
        setNote("");
        setRef("");
        setType("stock");
    };

    useEffect(() => {
        if (props.data) {
            setRSph(props.data.r.sph);
            setRCyl(props.data.r.cyl);
            setRAxis(props.data.r.axis);
            setRAdd(props.data.r.add);
            setLSph(props.data.l.sph);
            setLCyl(props.data.l.cyl);
            setLAxis(props.data.l.axis);
            setLAdd(props.data.l.add);
            setStatus(props.data.status);
            setProduct(
                productsData?.find((pr: any) => pr._id == props.data.products)
                    ?.name
            );
            setCustomer(
                customersData?.find(
                    (cust: any) => cust._id == props.data.customer
                )?.shopName
            );
            setNote(props.data.note);
            setRef(props.data.ref);
            setType(props.data.type);
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
                        {props.data ? "Update Order" : "Add Order"}
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-row items-center gap-x-2 w-full mt-2">
                    <div className="w-1/2">
                        <span className="text-xs font-bold">Ref</span>
                        <Input
                            value={ref}
                            onChange={(e) => setRef(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-xs font-bold">Type</span>
                        <DropDown
                            data={["Stock", "Rx"]}
                            value={type}
                            onChange={(e: string) => {
                                setType(e);
                            }}
                            placeholder="Select Type of Order"
                            disabled={props.data ? true : false}
                        />
                    </div>
                </div>
                <div className="w-full mt-2">
                    <span className="font-bold">Right Eye</span>
                    <div className="flex flex-row items-center gap-x-2 w-full mt-1 mb-2">
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Sph</span>
                            <Input
                                value={rSph}
                                onChange={(e) => setRSph(e.target.value)}
                            />
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Cyl</span>
                            <Input
                                value={rCyl}
                                onChange={(e) => setRCyl(e.target.value)}
                            />
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Axis</span>
                            <Input
                                value={rAxis}
                                onChange={(e) => setRAxis(e.target.value)}
                            />
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Add</span>
                            <Input
                                value={rAdd}
                                onChange={(e) => setRAdd(e.target.value)}
                            />
                        </div>
                    </div>
                    <span className="font-bold">Left Eye</span>
                    <div className="flex flex-row items-center gap-x-2 w-full mt-1">
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Sph</span>
                            <Input
                                value={lSph}
                                onChange={(e) => setLSph(e.target.value)}
                            />
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Cyl</span>
                            <Input
                                value={lCyl}
                                onChange={(e) => setLCyl(e.target.value)}
                            />
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Axis</span>
                            <Input
                                value={lAxis}
                                onChange={(e) => setLAxis(e.target.value)}
                            />
                        </div>
                        <div className="w-1/4">
                            <span className="text-xs font-bold">Add</span>
                            <Input
                                value={lAdd}
                                onChange={(e) => setLAdd(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 w-full mt-2">
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Customer</span>
                            <DropDown
                                data={customersData?.map(
                                    (customer: any) => customer.shopName
                                )}
                                value={customer}
                                onChange={(e: string) => setCustomer(e)}
                                placeholder="Select Customer"
                                disabled={props.data ? true : false}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-xs font-bold">Product</span>
                            <DropDown
                                data={productsData?.map(
                                    (product: any) =>
                                        product.name + " : " + product.company
                                )}
                                value={product}
                                onChange={(e: string) => {
                                    let val = e.split(" : ")[0];
                                    setProduct(val);
                                }}
                                placeholder="Select Product"
                                disabled={props.data ? true : false}
                            />
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <span className="text-xs font-bold">Note</span>
                        <Input
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                    <div className="w-full mt-4 flex justify-end">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            onClick={handleOrderSave}
                        >
                            {isPendingCreate || isPendingUpdate ? (
                                <div className="flex items-center justify-center">
                                    <Loader heavy />
                                </div>
                            ) : props.data ? (
                                "Update Order"
                            ) : (
                                "Add Order"
                            )}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddUpdateOrderModal;
