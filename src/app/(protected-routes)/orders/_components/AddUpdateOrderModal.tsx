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

type AddUpdateOrderModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

const AddUpdateOrderModal = (props: AddUpdateOrderModalProps) => {
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

    const handleOrderSave = () => {
        if (props.data) {
            // Update Order
        } else {
            // Add Order
        }
        console.log({
            rSph,
            rCyl,
            rAxis,
            rAdd,
            lSph,
            lCyl,
            lAxis,
            lAdd,
            status,
            product,
            customer,
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
                                    <Select
                                        value={customer}
                                        onValueChange={(e) => {
                                            setCustomer(e);
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Pending
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Ordered
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Delivered
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-1/2">
                                    <span className="text-xs font-bold">
                                        Product
                                    </span>
                                    <Select
                                        value={product}
                                        onValueChange={(e) => {
                                            setProduct(e);
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Pending
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Ordered
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Delivered
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full mt-4 flex justify-end">
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded-md"
                                    onClick={handleOrderSave}
                                >
                                    {props.data ? "Update" : "Add"} Order
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
