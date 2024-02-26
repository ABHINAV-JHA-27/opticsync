export default function Page() {
    return (
        <div className="h-screen p-[15px] w-full">
            <div className="flex flex-row justify-between items-center">
                <div className="bg-[#ffffff] py-[6px] px-[8px] rounded-lg w-[24%] h-[100px] border-[2px] border-[#EFEFF3]">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-[#9DA0A5] text-[12px] font-bold">
                            Total Orders
                        </span>
                        -
                    </div>
                    <span className="text-[#000000] text-[24px] font-[600]">
                        1500
                    </span>
                </div>
            </div>
        </div>
    );
}
