"use client";

import Loader from "@/components/Loader";
import { Input } from "@/components/ui/input";
import { createUser } from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [alternatePhone, setAlternatePhone] = useState("");
    const [gstNumber, setGstNumber] = useState("");
    const [bankAccount, setBankAccount] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [branch, setBranch] = useState("");
    const [accountHolderName, setAccountHolderName] = useState("");
    const [bankName, setBankName] = useState("");

    const { error, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: () => fetch("/api/user").then((res) => res.json()),
    });

    useEffect(() => {
        if (user && user.data.length > 0) {
            router.push("/dashboard");
        }
    }, [user]);

    const { mutate, isPending } = useMutation({
        mutationKey: ["user"],
        mutationFn: createUser,
        onSuccess: () => {
            router.replace("/dashboard");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleOnboard = async () => {
        await mutate({
            name,
            shopName,
            addressLine1,
            addressLine2,
            city,
            state,
            pincode,
            email,
            phone,
            alternatePhone,
            gstNumber,
            bankName,
            bankAccountNumber: bankAccount,
            ifscCode,
            bankAccountHolderName: accountHolderName,
            bankBranch: branch,
        });
    };

    return (
        <div className="h-screen w-full p-[18px] bg-[#0A0A0A]">
            <div className="bg-[#ffffff] w-full h-full rounded-2xl p-[20px] border-[2px] border-[#EFEFF3]">
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Shop Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Address Line 1
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={addressLine1}
                            onChange={(e) => setAddressLine1(e.target.value)}
                        />
                        <span className="text-[#0F1035] text-lg font-bold">
                            Address Line 2
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={addressLine2}
                            onChange={(e) => setAddressLine2(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="flex flex-row items-center gap-x-3 w-full">
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    City
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>{" "}
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    State
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-3 w-full">
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    Pincode
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                            </div>
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    Gst Number
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                    value={gstNumber}
                                    onChange={(e) =>
                                        setGstNumber(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Mobile Number
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Alternate Mobile Number
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={alternatePhone}
                            onChange={(e) => setAlternatePhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <span className="text-[#0F1035] text-lg font-bold">
                        Email
                    </span>
                    <Input
                        placeholder="Enter your name"
                        className="bg-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Bank Account
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={bankAccount}
                            onChange={(e) => setBankAccount(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Ifsc Code
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={ifscCode}
                            onChange={(e) => setIfscCode(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Branch
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Account Holder Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                            value={accountHolderName}
                            onChange={(e) =>
                                setAccountHolderName(e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <span className="text-[#0F1035] text-lg font-bold">
                        Bank Name
                    </span>
                    <Input
                        placeholder="Enter your name"
                        className="bg-white"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    />
                </div>
                <div className="w-full mt-4 flex justify-end">
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={handleOnboard}
                    >
                        {isPending ? (
                            <div className="flex items-center justify-center">
                                <Loader heavy />
                            </div>
                        ) : (
                            "Onboard"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
