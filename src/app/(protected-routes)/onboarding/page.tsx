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
                <div className="h-[100%] p-4 mt- w-full">
                    <div className="w-full flex flex-row gap-x-2">
                        <div className="w-1/2">
                            <span className="text-l font-[500]">Name</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-l font-[500]">Shop Name</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-x-2 mt-2">
                        <div className="w-1/2">
                            <span className="text-l font-[500]">
                                Address Line 1
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={addressLine1}
                                onChange={(e) =>
                                    setAddressLine1(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-l font-[500]">
                                Address Line 1
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={addressLine2}
                                onChange={(e) =>
                                    setAddressLine2(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-x-2 mt-2">
                        <div className="w-1/3">
                            <span className="text-l font-[500]">City</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="w-1/3">
                            <span className="text-l font-[500]">State</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                        <div className="w-1/3">
                            <span className="text-l font-[500]">Pincode</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-x-2 mt-2">
                        <div className="w-1/2">
                            <span className="text-l font-[500]">
                                GST Number
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={gstNumber}
                                onChange={(e) => setGstNumber(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-l font-[500]">
                                Email Address
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-x-2 mt-2">
                        <div className="w-1/2">
                            <span className="text-l font-[500]">
                                Phone Number
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="text-l font-[500]">
                                Alternate Phone Number
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={alternatePhone}
                                onChange={(e) =>
                                    setAlternatePhone(e.target.value)
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
                                value={accountHolderName}
                                onChange={(e) =>
                                    setAccountHolderName(e.target.value)
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
                                value={bankAccount}
                                onChange={(e) => setBankAccount(e.target.value)}
                            />
                        </div>
                        <div className="w-1/3">
                            <span className="text-l font-[500]">
                                Bank Branch
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                            />
                        </div>
                        <div className="w-1/3">
                            <span className="text-l font-[500]">IFSC Code</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={ifscCode}
                                onChange={(e) => setIfscCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-end mt-4">
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
        </div>
    );
}
