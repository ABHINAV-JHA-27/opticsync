import { Card } from "@/components/ui/card";
import ProductTable from "./_components/ProductTable";
import TopProducts from "./_components/TopProducts";
import TopCompanyByProducts from "./_components/TopCompanyByProducts";

export default function Page() {
    return (
        <div className="h-[100%] p-4">
            <div className="flex items-center justify-between mt-4 w-full">
                <TopProducts />
                <TopCompanyByProducts />
            </div>
            <ProductTable />
        </div>
    );
}
