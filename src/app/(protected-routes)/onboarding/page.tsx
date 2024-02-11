import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <div className="h-screen w-full p-[20px]">
            <div className="bg-[#DCF2F1] w-full h-full rounded-[14px] p-[14px]">
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Shop Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <span className="text-[#0F1035] text-lg font-bold">
                            Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                        />
                        <span className="text-[#0F1035] text-lg font-bold">
                            Name
                        </span>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white"
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="flex flex-row items-center gap-x-3 w-full">
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    Shop Name
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                />
                            </div>{" "}
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    Shop Name
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-3 w-full">
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    Shop Name
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                />
                            </div>
                            <div className="w-1/2">
                                <span className="text-[#0F1035] text-lg font-bold">
                                    Shop Name
                                </span>
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
