"use client";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { instance } from "@/lib/instance";
import { ethers } from "ethers";
import { Download, Info } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import EmployeeExperience from "public/EmployeeExperience.json";
import { format } from "date-fns";
import Link from "next/link";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";

type Certificate = {
    companyName: string;
    companyLogo: string;
    companySign: string;
    companyWebsite: string;
    title: string | null;
    footer: string | null;
    content1: string;
    content2: string | null;
    date: string | null;
    cid: string | null;
    empHash: string | null;
    tx: string;
    name: string;
};

function resolveString(template: string, data: any) {
    return template?.replace(/{{(.*?)}}/g, (match, key) => {
        return data[key.trim()] ?? `{{${key}}}`;
    });
}

export default function Page() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Certificate>();
    console.log(usePathname());

    const captureRef = useRef<HTMLDivElement>(null);

    const downloadAsImage = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current);
        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = data?.name + "_blockchain.png" || "capture.png";
        link.click();
    };
    async function fetchData() {
        const {
            data: { data: res },
        } = await instance.get("/local/template/" + params.id);

        const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_API_URL);
        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;
        const contract = new ethers.Contract(contractAddress, EmployeeExperience.abi, provider);

        const tx = await contract.getExperience(res.empHash);
        const details = {
            empId: tx[0],
            name: tx[1],
            company: tx[2],
            startDate: format(tx[3], "dd MMM yyyy"),
            endDate: format(tx[4], "dd MMM yyyy"),
            pf: tx[5],
        };

        setData({ ...res, ...details });
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [params]);
    if (loading) {
        return <>loading</>;
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-4xl bg-white shadow-lg relative">
                <CardContent className="p-8">
                    <div className=" absolute top-0 left-8 bg-green-500 text-white px-2 py-1 rounded-br rounded-bl flex ">
                        Certificate Verified by&nbsp;<span className="font-semibold"> Blockchain</span>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Info className="w-6 px-1" />
                            </HoverCardTrigger>
                            <HoverCardContent className="space-y-2">
                                <div className="text-xl font-semibold">Verified by Blockchain</div>
                                <div className="">
                                    {data?.tx && (
                                        <>
                                            You can check this transaction on this{" "}
                                            <Button asChild variant={"link"}>
                                                <Link href={"https://sepolia.etherscan.io/tx/" + data?.tx} target="_blank">
                                                    Etherium transaction link
                                                </Link>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="text-left">
                            <h1 className="text-zinc-600 font-semibold text-primary mb-2">Issued by:</h1>
                            <img src={data?.companyLogo} className="w-40 aspect-auto" alt="Company Logo" />
                        </div>
                        <div className="relative flex flex-col items-center justify-between space-y-0 group rounded">
                            <div className="absolute inset-0 items-center justify-center bg-zinc-500/50 hidden group-hover:flex transition rounded ">
                                <Button onClick={downloadAsImage}>
                                    <Download /> Download as png
                                </Button>
                            </div>
                            <div className="p-2" ref={captureRef}>
                                {<QRCode className="w-48 h-48" value={(location.href as string) || "I am Atomic"} />}
                                <div>{data?.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-semibold mb-6">Certificate of Experience</h2>
                        <p className="text-lg text-gray-800 mb-6">{resolveString(data?.content1 as string, data)}</p>
                        <p className="text-lg text-gray-800 mb-6">{resolveString(data?.content2 as string, data)}</p>
                        <div className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto mt-8">
                            <div className="text-center">
                                <p className="font-semibold">Issue Date</p>
                                <p className="text-sm text-gray-500">{data?.date}</p>
                            </div>
                            <div className="text-center">
                                <p className="font-semibold">Certificate ID</p>
                                <p className="text-sm text-gray-500">{data?.cid}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200 w-full">
                        <p className="mb-4">
                            Best Regards,
                            <br />
                            For {data?.companyName}
                        </p>
                        <div className="flex justify-between items-end">
                            <div>
                                <img src={data?.companySign} className="w-36 aspect-auto" alt="Signature" />
                                <p className="font-semibold">Radhika K</p>
                                <p className="text-sm text-gray-500">Director</p>
                                <p className="text-sm text-gray-500">{data?.companyName}</p>
                                <p className="text-sm text-gray-500">{data?.companyWebsite}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
