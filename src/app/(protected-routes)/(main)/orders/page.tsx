import { Card } from "@/components/ui/card";
import OrderTable from "./_components/OrderTable";

export default function Page() {
    return (
        <div className="h-[100%] p-4">
            <div className="flex items-center justify-between mt-4">
                <Card>top Product</Card>
                <Card>top Product</Card>
            </div>
            <OrderTable />
        </div>
    );
}
