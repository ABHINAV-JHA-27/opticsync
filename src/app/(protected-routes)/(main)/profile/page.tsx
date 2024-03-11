"use client";

import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Page() {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [gstNumber, setGstNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [alternatePhoneNumber, setAlternatePhoneNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [bankAccountHolderName, setBankAccountHolderName] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [bankBranch, setBankBranch] = useState("");
    const [ifscCode, setIfscCode] = useState("");

    const queryclient = useQueryClient();

    const { data: user } = useQuery({
        queryKey: ["user"],
        queryFn: () => fetch("/api/user").then((res) => res.json()),
    });

    const { error, mutate, isPending } = useMutation({
        mutationFn: (newData: any) =>
            fetch("/api/user", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            }).then((res) => res.json()),
        onSuccess: () => {
            setEditing(false);
            queryclient.invalidateQueries({
                queryKey: ["user"],
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    useEffect(() => {
        if (user) {
            setName(user.data[0].name);
            setShopName(user.data[0].shopName);
            setAddressLine1(user.data[0].addressLine1);
            setAddressLine2(user.data[0].addressLine2);
            setCity(user.data[0].city);
            setState(user.data[0].state);
            setPincode(user.data[0].pincode);
            setGstNumber(user.data[0].gstNumber);
            setEmail(user.data[0].email);
            setPhoneNumber(user.data[0].phone);
            setAlternatePhoneNumber(user.data[0].alternatePhone);
            setBankName(user.data[0].bankName);
            setBankAccountHolderName(user.data[0].bankAccountHolderName);
            setBankAccountNumber(user.data[0].bankAccountNumber);
            setBankBranch(user.data[0].bankBranch);
            setIfscCode(user.data[0].ifscCode);
        }
    }, [user]);

    if (!user) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleSaveUser = async () => {
        await mutate({
            name,
            shopName,
            addressLine1,
            addressLine2,
            city,
            state,
            pincode,
            gstNumber,
            email,
            phone: phoneNumber,
            alternatePhone: alternatePhoneNumber,
            bankName,
            bankAccountHolderName,
            bankAccountNumber,
            bankBranch,
            ifscCode,
        });
    };

    return (
        <div className="h-[100%] p-4 mt- w-full">
            <div className="w-full flex flex-row gap-x-2">
                <div className="w-1/2">
                    <span className="text-l font-[500]">Name</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <span className="text-l font-[500]">Shop Name</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-2 mt-2">
                <div className="w-1/2">
                    <span className="text-l font-[500]">Address Line 1</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={addressLine1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <span className="text-l font-[500]">Address Line 1</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-2 mt-2">
                <div className="w-1/3">
                    <span className="text-l font-[500]">City</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <span className="text-l font-[500]">State</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <span className="text-l font-[500]">Pincode</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-2 mt-2">
                <div className="w-1/2">
                    <span className="text-l font-[500]">GST Number</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <span className="text-l font-[500]">Email Address</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-2 mt-2">
                <div className="w-1/2">
                    <span className="text-l font-[500]">Phone Number</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <span className="text-l font-[500]">
                        Alternate Phone Number
                    </span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={alternatePhoneNumber}
                        onChange={(e) =>
                            setAlternatePhoneNumber(e.target.value)
                        }
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-2 mt-2">
                <div className="w-1/2">
                    <span className="text-l font-[500]">Bank Name</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <span className="text-l font-[500]">
                        Bank Account Holder Name
                    </span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={bankAccountHolderName}
                        onChange={(e) =>
                            setBankAccountHolderName(e.target.value)
                        }
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-x-2 mt-2">
                <div className="w-1/3">
                    <span className="text-l font-[500]">
                        Bank Account Number
                    </span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={bankAccountNumber}
                        onChange={(e) => setBankAccountNumber(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <span className="text-l font-[500]">Bank Branch</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={bankBranch}
                        onChange={(e) => setBankBranch(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <span className="text-l font-[500]">IFSC Code</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                    />
                </div>
            </div>
            <div
                className={cn(
                    "w-full flex flex-row justify-end gap-x-2 mt-6",
                    editing && "justify-between"
                )}
            >
                {editing ? (
                    <>
                        <button
                            onClick={() => {
                                setEditing(false);
                            }}
                        >
                            &larr;&nbsp;&nbsp;Cancel
                        </button>
                        <button
                            className="bg-green-500 text-white p-2 rounded-md w-[5vw]"
                            onClick={handleSaveUser}
                        >
                            {isPending ? (
                                <div className="flex flex-row items-center justify-center">
                                    <Loader heavy />
                                </div>
                            ) : (
                                "Save"
                            )}
                        </button>
                    </>
                ) : (
                    <button
                        className="bg-blue-500 text-white p-2 rounded-md w-[5vw]"
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
}
