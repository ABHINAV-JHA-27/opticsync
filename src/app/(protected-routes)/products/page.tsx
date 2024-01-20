import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const data = [
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
    {
        name: "Nova Blumax",
        company: "Vision RX Labs",
        wlp: "600",
        srp: "1800",
    },
];

export default function Page() {
    return (
        <div className="h-[100%] p-4">
            <div className="flex items-center justify-between mt-4">
                <Card>top Product</Card>
                <Card>top Product</Card>
            </div>
            <div className="flex items-center justify-between mt-5">
                <Input
                    type="text"
                    className="px-3 py-2 w-80"
                    placeholder="Search..."
                />
                <Button className="w-[15%]">Add +</Button>
            </div>
            <ScrollArea className="w-full h-[50vh] mt-4 rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>WLP</TableHead>
                            <TableHead>SRP</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.company}</TableCell>
                                <TableCell>{item.wlp}</TableCell>
                                <TableCell>{item.srp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    );
}
