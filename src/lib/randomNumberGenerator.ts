import { v4 as uuidv4 } from "uuid";

export const RandomChallanNumber = (user: string, customer: string) => {
    const user_initials = user
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();
    const customer_initials = customer
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();
    const uuid = uuidv4();
    let challanNumber = uuid.replace(/-/g, "").substring(0, 8);
    challanNumber = `${user_initials}/CH/${customer_initials}/${challanNumber}`;
    return challanNumber;
};

export const RandomInvoiceNumber = (user: string, customer: string) => {
    const user_initials = user
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();
    const customer_initials = customer
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();

    const uuid = uuidv4();
    let invoiceNumber = uuid.replace(/-/g, "").substring(0, 8);
    invoiceNumber = `${user_initials}/INV/${customer_initials}/${invoiceNumber}`;
    return invoiceNumber;
};
