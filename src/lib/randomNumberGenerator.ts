export const RandomChallanNumber = (user: string, challanNo: number) => {
    let fiscalyear = "";
    let today = new Date();
    if (today.getMonth() + 1 <= 3) {
        fiscalyear = today.getFullYear() - 1 + "-" + today.getFullYear();
    } else {
        fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1);
    }

    const user_initials = user
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();

    let challanNumber = `${user_initials}/CH/${fiscalyear}/${challanNo}`;
    return challanNumber;
};

export const RandomInvoiceNumber = (user: string, invNo: number) => {
    let fiscalyear = "";
    let today = new Date();
    if (today.getMonth() + 1 <= 3) {
        fiscalyear = today.getFullYear() - 1 + "-" + today.getFullYear();
    } else {
        fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1);
    }

    const user_initials = user
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();

    let invoiceNumber = `${user_initials}/INV/${fiscalyear}/${invNo}`;
    return invoiceNumber;
};
