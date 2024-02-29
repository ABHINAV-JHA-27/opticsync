import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import "./style.css";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

type InvoiceDocProps = {
    // invoice: {
    //     id: string;
    //     date: string;
    //     items: {
    //         name: string;
    //         price: number;
    //         quantity: number;
    //     }[];
    // };
    ref?: any;
};

const InvoiceDoc = (props: InvoiceDocProps) => (
    <div
        ref={props.ref}
        id={"invoice"}
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            padding: "15px",
        }}
    >
        <p className="c39">
            <span className="c254">Tax Invoice</span>
        </p>
        <p className="c33">
            <span className="c201"></span>
        </p>
        <a id="t.18fec7fb7eccbc9293ec65e958af8c9c9b2a2954"></a>
        <a id="t.0"></a>
        <table className="c2">
            <tr className="c1">
                <td className="c208" colSpan={1} rowSpan={1}>
                    <p className="c288">
                        <span className="c142">OPTICAL EXPRESS</span>
                    </p>
                    <p className="c198">
                        <span className="c18">
                            Kazipur Road No. 4 Near Arvind Mahila College Patna
                            800004
                        </span>
                    </p>
                    <p className="c178">
                        <span className="c18">
                            Phone no.: 9386645444 Email:{" "}
                        </span>
                        <span className="c18">
                            <a
                                className="c230"
                                href="mailto:opticalexpressbihar@gmail.com"
                            >
                                opticalexpressbihar@gmail.com
                            </a>
                        </span>
                    </p>
                    <p className="c84">
                        <span className="c18">
                            GSTIN: 10AERPJ8778H2Z0, State: 10-Bihar
                        </span>
                    </p>
                </td>
            </tr>
            <tr className="c202">
                <td className="c31 c220" colSpan={8} rowSpan={1}>
                    <p className="c56">
                        <span className="c40">Bill To:</span>
                    </p>
                </td>
                <td className="c35" colSpan={7} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
            </tr>
            <tr className="c257">
                <td className="c278" colSpan={8} rowSpan={1}>
                    <p className="c125">
                        <span className="c5">NEW Durga optical</span>
                    </p>
                </td>
                <td className="c100" colSpan={7} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
            </tr>
            <tr className="c134">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c284">
                        <span className="c18">
                            SHASHI PALACE HOLDING NO. 308 C/O MANMIT KUMAR NALA
                            ROAD
                        </span>
                    </p>
                </td>
                <td className="c100" colSpan={7} rowSpan={1}>
                    <p className="c173">
                        <span className="c18">Place of Supply: 10-Bihar</span>
                    </p>
                </td>
            </tr>
            <tr className="c154">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c4">
                        <span className="c18">NALA ROAD</span>
                    </p>
                </td>
                <td className="c100" colSpan={7} rowSpan={1}>
                    <p className="c183">
                        <span className="c5">Invoice No.: 2023-24/48</span>
                    </p>
                </td>
            </tr>
            <tr className="c7">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c180">
                        <span className="c18">Contact No.: 9939954600</span>
                    </p>
                </td>
                <td className="c100" colSpan={7} rowSpan={1}>
                    <p className="c191">
                        <span className="c5">Date: 29-08-2023</span>
                    </p>
                </td>
            </tr>
            <tr className="c135">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c177">
                        <span className="c18">
                            GSTIN Number: 10BMYPK9344L1ZE
                        </span>
                    </p>
                </td>
                <td className="c100" colSpan={7} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
            </tr>
            <tr className="c242">
                <td className="c126" colSpan={8} rowSpan={1}>
                    <p className="c225">
                        <span className="c18">State: 10-Bihar</span>
                    </p>
                </td>
                <td className="c256" colSpan={7} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
            </tr>
            <tr className="c150">
                <td className="c31 c238" colSpan={1} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c116">
                        <span className="c40">#</span>
                    </p>
                </td>
                <td className="c31 c155" colSpan={2} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c221">
                        <span className="c40">Item name</span>
                    </p>
                </td>
                <td className="c31 c77" colSpan={2} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c119">
                        <span className="c40">HSN/ SAC</span>
                    </p>
                </td>
                <td className="c22" colSpan={2} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c227">
                        <span className="c40">Quantity</span>
                    </p>
                </td>
                <td className="c31 c161" colSpan={2} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c137">
                        <span className="c40">Unit</span>
                    </p>
                </td>
                <td className="c31 c76" colSpan={1} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c91">
                        <span className="c40">Price/ unit</span>
                    </p>
                </td>
                <td className="c76 c31" colSpan={2} rowSpan={1}>
                    <p className="c193">
                        <span className="c40">Taxable amount</span>
                    </p>
                </td>
                <td className="c76 c31" colSpan={1} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c286">
                        <span className="c40">CGST</span>
                    </p>
                </td>
                <td className="c31 c228" colSpan={1} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c65">
                        <span className="c40">SGST</span>
                    </p>
                </td>
                <td className="c76 c31" colSpan={1} rowSpan={1}>
                    <p className="c48">
                        <span className="c69"></span>
                    </p>
                    <p className="c91">
                        <span className="c40">Amount</span>
                    </p>
                </td>
            </tr>
            <tr className="c150">
                <td className="c195" colSpan={1} rowSpan={1}>
                    <p className="c67">
                        <span className="c18">1</span>
                    </p>
                </td>
                <td className="c239" colSpan={2} rowSpan={1}>
                    <p className="c209">
                        <span className="c18">1.50 Crizal easy pro</span>
                    </p>
                </td>
                <td className="c147" colSpan={2} rowSpan={1}>
                    <p className="c93">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c260" colSpan={2} rowSpan={1}>
                    <p className="c104">
                        <span className="c18">9</span>
                    </p>
                </td>
                <td className="c234" colSpan={2} rowSpan={1}>
                    <p className="c104">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c141" colSpan={1} rowSpan={1}>
                    <p className="c58">
                        <span className="c14">&#8377; </span>
                        <span className="c18">930.00</span>
                    </p>
                </td>
                <td className="c141" colSpan={2} rowSpan={1}>
                    <p className="c131">
                        <span className="c14">&#8377; </span>
                        <span className="c18">8,370.00</span>
                    </p>
                </td>
                <td className="c141" colSpan={1} rowSpan={1}>
                    <p className="c274">
                        <span className="c14">&#8377; </span>
                        <span className="c18">502.20</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c90" colSpan={1} rowSpan={1}>
                    <p className="c283">
                        <span className="c14">&#8377; </span>
                        <span className="c18">502.20</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c141" colSpan={1} rowSpan={1}>
                    <p className="c58">
                        <span className="c14">&#8377; </span>
                        <span className="c18">9,374.40</span>
                    </p>
                </td>
            </tr>
            <tr className="c64">
                <td className="c26" colSpan={1} rowSpan={1}>
                    <p className="c86">
                        <span className="c18">2</span>
                    </p>
                </td>
                <td className="c21" colSpan={2} rowSpan={1}>
                    <p className="c112">
                        <span className="c18">Nova thinmax 1.56</span>
                    </p>
                </td>
                <td className="c36" colSpan={2} rowSpan={1}>
                    <p className="c107">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c16" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">11</span>
                    </p>
                </td>
                <td className="c38" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">910.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={2} rowSpan={1}>
                    <p className="c102">
                        <span className="c14">&#8377; </span>
                        <span className="c18">10,010.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c96">
                        <span className="c14">&#8377; </span>
                        <span className="c18">600.60</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c20" colSpan={1} rowSpan={1}>
                    <p className="c49">
                        <span className="c14">&#8377; </span>
                        <span className="c18">600.60</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">11,211.20</span>
                    </p>
                </td>
            </tr>
            <tr className="c78">
                <td className="c26" colSpan={1} rowSpan={1}>
                    <p className="c86">
                        <span className="c18">3</span>
                    </p>
                </td>
                <td className="c21" colSpan={2} rowSpan={1}>
                    <p className="c112">
                        <span className="c18">Everyday short bct easy</span>
                    </p>
                </td>
                <td className="c36" colSpan={2} rowSpan={1}>
                    <p className="c107">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c16" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">5</span>
                    </p>
                </td>
                <td className="c38" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">2,200.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={2} rowSpan={1}>
                    <p className="c102">
                        <span className="c14">&#8377; </span>
                        <span className="c18">11,000.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c96">
                        <span className="c14">&#8377; </span>
                        <span className="c18">660.00</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c20" colSpan={1} rowSpan={1}>
                    <p className="c49">
                        <span className="c14">&#8377; </span>
                        <span className="c18">660.00</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">12,320.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c78">
                <td className="c26" colSpan={1} rowSpan={1}>
                    <p className="c130">
                        <span className="c18">4</span>
                    </p>
                </td>
                <td className="c21" colSpan={2} rowSpan={1}>
                    <p className="c246">
                        <span className="c18">Nova delite blumax crizal</span>
                    </p>
                </td>
                <td className="c36" colSpan={2} rowSpan={1}>
                    <p className="c165">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c16" colSpan={2} rowSpan={1}>
                    <p className="c71">
                        <span className="c18">4</span>
                    </p>
                </td>
                <td className="c38" colSpan={2} rowSpan={1}>
                    <p className="c71">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c140">
                        <span className="c14">&#8377; </span>
                        <span className="c18">2,550.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={2} rowSpan={1}>
                    <p className="c144">
                        <span className="c14">&#8377; </span>
                        <span className="c18">10,200.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c163">
                        <span className="c14">&#8377; </span>
                        <span className="c18">612.00</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c20" colSpan={1} rowSpan={1}>
                    <p className="c207">
                        <span className="c14">&#8377; </span>
                        <span className="c18">612.00</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c140">
                        <span className="c14">&#8377; </span>
                        <span className="c18">11,424.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c64">
                <td className="c26" colSpan={1} rowSpan={1}>
                    <p className="c67">
                        <span className="c18">5</span>
                    </p>
                </td>
                <td className="c21" colSpan={2} rowSpan={1}>
                    <p className="c209">
                        <span className="c18">KT UV Blue Crizal uv</span>
                    </p>
                </td>
                <td className="c36" colSpan={2} rowSpan={1}>
                    <p className="c93">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c16" colSpan={2} rowSpan={1}>
                    <p className="c104">
                        <span className="c18">6</span>
                    </p>
                </td>
                <td className="c38" colSpan={2} rowSpan={1}>
                    <p className="c104">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c58">
                        <span className="c14">&#8377; </span>
                        <span className="c18">1,490.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={2} rowSpan={1}>
                    <p className="c131">
                        <span className="c14">&#8377; </span>
                        <span className="c18">8,940.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c96">
                        <span className="c14">&#8377; </span>
                        <span className="c18">536.40</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c20" colSpan={1} rowSpan={1}>
                    <p className="c49">
                        <span className="c14">&#8377; </span>
                        <span className="c18">536.40</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c58">
                        <span className="c14">&#8377; </span>
                        <span className="c18">10,012.80</span>
                    </p>
                </td>
            </tr>
            <tr className="c64">
                <td className="c26" colSpan={1} rowSpan={1}>
                    <p className="c86">
                        <span className="c18">6</span>
                    </p>
                </td>
                <td className="c21" colSpan={2} rowSpan={1}>
                    <p className="c112">
                        <span className="c18">Nova delite satin plus</span>
                    </p>
                </td>
                <td className="c36" colSpan={2} rowSpan={1}>
                    <p className="c107">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c16" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">4</span>
                    </p>
                </td>
                <td className="c38" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">1,700.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={2} rowSpan={1}>
                    <p className="c240">
                        <span className="c14">&#8377; </span>
                        <span className="c18">6,800.00</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c96">
                        <span className="c14">&#8377; </span>
                        <span className="c18">408.00</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c20" colSpan={1} rowSpan={1}>
                    <p className="c49">
                        <span className="c14">&#8377; </span>
                        <span className="c18">408.00</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c17" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">7,616.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c263">
                <td className="c252" colSpan={1} rowSpan={1}>
                    <p className="c86">
                        <span className="c18">7</span>
                    </p>
                </td>
                <td className="c172" colSpan={2} rowSpan={1}>
                    <p className="c265">
                        <span className="c18">
                            Nova Trandfree T-VI classNameic gray crizal uv
                        </span>
                    </p>
                </td>
                <td className="c214" colSpan={2} rowSpan={1}>
                    <p className="c107">
                        <span className="c18">90015000</span>
                    </p>
                </td>
                <td className="c223" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">2</span>
                    </p>
                </td>
                <td className="c215" colSpan={2} rowSpan={1}>
                    <p className="c72">
                        <span className="c18">Prs</span>
                    </p>
                </td>
                <td className="c44" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">4,350.00</span>
                    </p>
                </td>
                <td className="c44" colSpan={2} rowSpan={1}>
                    <p className="c240">
                        <span className="c14">&#8377; </span>
                        <span className="c18">8,700.00</span>
                    </p>
                </td>
                <td className="c44" colSpan={1} rowSpan={1}>
                    <p className="c96">
                        <span className="c14">&#8377; </span>
                        <span className="c18">522.00</span>
                    </p>
                    <p className="c50">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c73" colSpan={1} rowSpan={1}>
                    <p className="c49">
                        <span className="c14">&#8377; </span>
                        <span className="c18">522.00</span>
                    </p>
                    <p className="c94">
                        <span className="c18">(6.0%)</span>
                    </p>
                </td>
                <td className="c44" colSpan={1} rowSpan={1}>
                    <p className="c103">
                        <span className="c14">&#8377; </span>
                        <span className="c18">9,744.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c34">
                <td className="c226" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c272" colSpan={2} rowSpan={1}>
                    <p className="c82">
                        <span className="c5">Total</span>
                    </p>
                </td>
                <td className="c145" colSpan={2} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c75" colSpan={2} rowSpan={1}>
                    <p className="c63">
                        <span className="c5">41</span>
                    </p>
                </td>
                <td className="c277" colSpan={2} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c138" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c138" colSpan={2} rowSpan={1}>
                    <p className="c99">
                        <span className="c14">&#8377; </span>
                        <span className="c5">64,020.00</span>
                    </p>
                </td>
                <td className="c138" colSpan={1} rowSpan={1}>
                    <p className="c192">
                        <span className="c14">&#8377; </span>
                        <span className="c5">3,841.20</span>
                    </p>
                </td>
                <td className="c279" colSpan={1} rowSpan={1}>
                    <p className="c273">
                        <span className="c14">&#8377; </span>
                        <span className="c5">3,841.20</span>
                    </p>
                </td>
                <td className="c138" colSpan={1} rowSpan={1}>
                    <p className="c63">
                        <span className="c14">&#8377; </span>
                        <span className="c5">71,702.40</span>
                    </p>
                </td>
            </tr>
            <tr className="c135">
                <td className="c31 c280" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c31 c41" colSpan={1} rowSpan={1}>
                    <p className="c59">
                        <span className="c40">Tax type</span>
                    </p>
                </td>
                <td className="c31 c113" colSpan={2} rowSpan={1}>
                    <p className="c111">
                        <span className="c40">Taxable amount</span>
                    </p>
                </td>
                <td className="c31 c247" colSpan={2} rowSpan={1}>
                    <p className="c110">
                        <span className="c40">Rate</span>
                    </p>
                </td>
                <td className="c31 c43" colSpan={2} rowSpan={1}>
                    <p className="c143">
                        <span className="c40">Tax amount</span>
                    </p>
                </td>
                <td className="c31 c244" colSpan={7} rowSpan={1}>
                    <p className="c79">
                        <span className="c40">Amounts:</span>
                    </p>
                </td>
            </tr>
            <tr className="c291">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c177">
                        <span className="c18">
                            SGST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="c14">&#8377; </span>
                        <span className="c18">
                            64,020.00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.0%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="c14">&#8377; </span>
                        <span className="c18">3,841.20</span>
                    </p>
                </td>
                <td className="c275" colSpan={2} rowSpan={1}>
                    <p className="c182">
                        <span className="c18">Sub Total</span>
                    </p>
                </td>
                <td className="c241" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c236" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c235" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c153" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c199" colSpan={1} rowSpan={1}>
                    <p className="c231">
                        <span className="c14">&#8377; </span>
                        <span className="c18">71,702.40</span>
                    </p>
                </td>
            </tr>
            <tr className="c85">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c177">
                        <span className="c18">
                            CGST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="c14">&#8377; </span>
                        <span className="c18">
                            64,020.00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.0%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="c14">&#8377; </span>
                        <span className="c18">3,841.20</span>
                    </p>
                </td>
                <td className="c127" colSpan={2} rowSpan={1}>
                    <p className="c182">
                        <span className="c18">Round off</span>
                    </p>
                </td>
                <td className="c25" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c166" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c101" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c114" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c106" colSpan={1} rowSpan={1}>
                    <p className="c231">
                        <span className="c18">- </span>
                        <span className="c14">&#8377; </span>
                        <span className="c18">0.40</span>
                    </p>
                </td>
            </tr>
            <tr className="c271">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c281" colSpan={2} rowSpan={1}>
                    <p className="c27">
                        <span className="c5">Total</span>
                    </p>
                </td>
                <td className="c160" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c53" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c169" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c267" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c167" colSpan={1} rowSpan={1}>
                    <p className="c63">
                        <span className="c14">&#8377; </span>
                        <span className="c5">71,702.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c135">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c127" colSpan={2} rowSpan={1}>
                    <p className="c89">
                        <span className="c18">Received</span>
                    </p>
                </td>
                <td className="c25" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c166" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c101" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c114" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c106" colSpan={1} rowSpan={1}>
                    <p className="c224">
                        <span className="c14">&#8377; </span>
                        <span className="c18">0.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c98">
                <td className="c126" colSpan={8} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c243" colSpan={2} rowSpan={1}>
                    <p className="c149">
                        <span className="c18">Balance</span>
                    </p>
                </td>
                <td className="c162" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c262" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c197" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c290" colSpan={1} rowSpan={1}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
                <td className="c248" colSpan={1} rowSpan={1}>
                    <p className="c250">
                        <span className="c14">&#8377; </span>
                        <span className="c18">71,702.00</span>
                    </p>
                </td>
            </tr>
            <tr className="c34">
                <td className="c31 c179" colSpan={8} rowSpan={1}>
                    <p className="c157">
                        <span className="c40">Invoice Amount In Words</span>
                    </p>
                </td>
                <td className="c117" colSpan={7} rowSpan={4}>
                    <p className="c6">
                        <span className="c9"></span>
                    </p>
                </td>
            </tr>
            <tr className="c34">
                <td className="c57" colSpan={8} rowSpan={1}>
                    <p className="c251">
                        <span className="c18">
                            Seventy One Thousand Seven Hundred and Two Rupees
                            only
                        </span>
                    </p>
                </td>
            </tr>
            <tr className="c34">
                <td className="c57 c31" colSpan={8} rowSpan={1}>
                    <p className="c210">
                        <span className="c40">Payment Mode</span>
                    </p>
                </td>
            </tr>
            <tr className="c289">
                <td className="c126" colSpan={8} rowSpan={1}>
                    <p className="c189">
                        <span className="c18">Credit</span>
                    </p>
                </td>
            </tr>
            <tr className="c85">
                <td className="c31 c159" colSpan={5} rowSpan={1}>
                    <p className="c285">
                        <span className="c40">Terms and conditions:</span>
                    </p>
                </td>
                <td className="c259" colSpan={6} rowSpan={4}>
                    <p className="c33">
                        <span className="c176"></span>
                    </p>
                    <p className="c158">
                        <span
                            style={{
                                overflow: "hidden",
                                display: "inline-block",
                                margin: "0px 0px",
                                border: "0px solid #000000",
                                transform: "rotate(0rad) translateZ(0px)",
                                WebkitTransform: "rotate(0rad) translateZ(0px)",
                                width: "47.56px",
                                height: "47.56px",
                            }}
                        >
                            <img
                                alt=""
                                src="images/image1.png"
                                style={{
                                    width: "47.56px",
                                    height: "47.56px",
                                    marginLeft: "0px",
                                    marginTop: "0px",
                                    transform: "rotate(0rad) translateZ(0px)",
                                    WebkitTransform:
                                        "rotate(0rad) translateZ(0px)",
                                }}
                                title=""
                            />
                        </span>
                    </p>
                    <p className="c287">
                        <span className="c216"></span>
                    </p>
                    <p className="c121">
                        <span
                            style={{
                                overflow: "hidden",
                                display: "inline-block",
                                margin: "0px 0px",
                                border: "0px solid #000000",
                                transform: "rotate(0rad) translateZ(0px)",
                                WebkitTransform: "rotate(0rad) translateZ(0px)",
                                width: "60.23px",
                                height: "13.5px",
                            }}
                        >
                            <img
                                alt=""
                                src="images/image3.png"
                                style={{
                                    width: "60.23px",
                                    height: "13.5px",
                                    marginLeft: "0px",
                                    marginTop: "0px",
                                    transform: "rotate(0rad) translateZ(0px)",
                                    WebkitTransform:
                                        "rotate(0rad) translateZ(0px)",
                                }}
                                title=""
                            />
                        </span>
                    </p>
                </td>
                <td className="c188" colSpan={4} rowSpan={4}>
                    <p className="c151">
                        <span className="c18">For, OPTICAL EXPRESS</span>
                    </p>
                    <p className="c232">
                        <span className="c156"></span>
                    </p>
                    <p className="c237">
                        <span
                            style={{
                                overflow: "hidden",
                                display: "inline-block",
                                margin: "0px 0px",
                                border: "0px solid #000000",
                                transform: "rotate(0rad) translateZ(0px)",
                                WebkitTransform: "rotate(0rad) translateZ(0px)",
                                width: "85.32px",
                                height: "31.6px",
                            }}
                        >
                            <img
                                alt=""
                                src="images/image2.png"
                                style={{
                                    width: "85.32px",
                                    height: "31.6px",
                                    marginLeft: "0px",
                                    marginTop: "0px",
                                    transform: "rotate(0rad) translateZ(0px)",
                                    WebkitTransform:
                                        "rotate(0rad) translateZ(0px)",
                                }}
                                title=""
                            />
                        </span>
                    </p>
                    <p className="c170">
                        <span className="c18">Authorized Signatory</span>
                    </p>
                </td>
            </tr>
            <tr className="c205">
                <td className="c187" colSpan={5} rowSpan={1}>
                    <p className="c146">
                        <span className="c18">
                            Thank you for doing business with us.{" "}
                        </span>
                        <span className="c15">&#128591; </span>
                        <span className="c18">WELCOME AGAIN</span>
                        <span className="c15">&#128591;</span>
                    </p>
                </td>
            </tr>
            <tr className="c211">
                <td className="c187 c31" colSpan={5} rowSpan={1}>
                    <p className="c61">
                        <span className="c40">Bank details:</span>
                    </p>
                </td>
            </tr>
            <tr className="c184">
                <td className="c80" colSpan={5} rowSpan={1}>
                    <p className="c180">
                        <span className="c18">
                            Bank Name: HDFC BANK, RAJENDRA NAGAR
                        </span>
                    </p>
                    <p className="c74">
                        <span className="c18">
                            Bank Account No.: 50200066675072 Bank IFSC code:
                            HDFC0002851
                        </span>
                    </p>
                    <p className="c116">
                        <span className="c18">
                            Account Holder&#39;s Name: OPTICAL EXPRESS
                        </span>
                    </p>
                </td>
            </tr>
        </table>
        <p className="c10">
            <span className="c18"></span>
        </p>
    </div>
);

export default InvoiceDoc;
