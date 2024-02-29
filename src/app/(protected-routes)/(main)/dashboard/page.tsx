import GrowthCard from "./_components/GrowthCard";

export default function Page() {
    return (
        <div className="h-screen p-[15px] w-full">
            <div className="flex flex-row justify-between items-center">
                <GrowthCard />
                <GrowthCard />
                <GrowthCard />
                <GrowthCard />
            </div>
        </div>
    );
}
