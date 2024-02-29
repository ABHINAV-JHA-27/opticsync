"use client";
import InvoiceDoc from "@/components/InvoiceDoc";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
        // margin is in MM, default is Margin.NONE = 0
        margin: Margin.SMALL,
        // default is 'A4'
        format: "letter",
        // default is 'portrait'
        orientation: "landscape",
    },
    canvas: {
        // default is 'image/jpeg' for better size performance
        mimeType: "image/png",
        qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
        // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
        pdf: {
            compress: true,
        },
        // see https://html2canvas.hertzen.com/configuration for more options
        canvas: {
            useCORS: true,
        },
    },
};

export default function Page() {
    const getTargetElement = () => document.getElementById("invoice");

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
            <button
                onClick={() => {
                    console.log("toPDF");
                }}
            >
                Download PDF
            </button>
            {/* {<InvoiceDoc />} */}
        </div>
    );
}
