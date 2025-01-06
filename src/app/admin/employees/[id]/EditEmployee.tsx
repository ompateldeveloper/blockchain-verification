"use client";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { instance } from "@/lib/instance";
import { zodResolver } from "@hookform/resolvers/zod";
import { ethers } from "ethers";
import { Info, Loader } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { abi } from "public/EmployeeExperience.json";
import { schema } from "../schema";

type FormData = z.infer<typeof schema>;

export default function EditEmployee(employee: any) {
    const [status, setStatus] = React.useState("idle");
    const [error, setError] = React.useState("");
    const dialogCloseRef = React.useRef<HTMLButtonElement>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    useEffect(() => {
        reset(employee.employee);

        
    }, [employee]);

    const AddToBlockchain = async (data: FormData) => {
        const provider = new ethers.BrowserProvider((window as any)?.ethereum);
        const signer = await provider.getSigner();

        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

        if (!contractAddress) {
            throw new Error("Contract address is not defined");
        }

        const contract = new ethers.Contract(contractAddress, abi, signer);

        const tx = await contract.updateExperience(data.empId, `${data.fname} ${data.mname} ${data.lname}`, "Accentiqa", String(data.startDate), String(data.endDate), data.pfNumber);
        const receipt = await tx.wait();

        // const payload:{hash:string,name:string} = {
        //     hash: receipt.logs[0].args[0],
        //     name: receipt.logs[0].args[1],
        //     startDate: format(String(data.startDate), "dd MMM yyyy"),
        //     endDate: format(String(data.endDate), "dd MMM yyyy"),
        // };
        return receipt.logs[0].args[0];
        // toast.success("Generating PDF in background, This could take a while", { duration: 5000 });
    };
    const onSubmit = async (data: FormData) => {


        instance
            .post("/employees", data)
            .then((response) => {
                setStatus("Updating hash on blockchain");
            })
            .catch((error) => {
                console.error("Error adding employee:", error);
                setStatus("idle");
                setError("Error adding employee to Database");
            });
        const empHash = await AddToBlockchain(data);
        setStatus("Updating hash on database");
        instance
            .post(`/employees/update-hash/${data.empId}`, { empHash })
            .then((response) => {
                setStatus("idle");
                dialogCloseRef.current?.click();
                reset();
            })
            .catch((error) => {
                console.error("Error adding employee:", error);
                setStatus("idle");
                setError("Error adding employee to Database");
            });
    };
    return (
        <form className=" flex flex-col px-2 pt-4 space-y-2 relative" onSubmit={handleSubmit(onSubmit)}>
            {status !== "idle" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-zinc-50 dark:bg-gray-900 rounded-md shadow-md">
                    <div>
                        {status}
                        <div className="animate-spin w-min">
                            <Loader />
                        </div>
                    </div>
                </div>
            )}
            <div className="flex space-x-2">
                <div className="space-y-2">
                    <Label htmlFor="fname">First Name *</Label>
                    <Input {...register("fname")} />
                    <div className="text-red-500 dark:text-red-600 text-xs">{errors?.fname?.message}</div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="mname">Middle Name *</Label>
                    <Input {...register("mname")} />
                    <div className="text-red-500 dark:text-red-600 text-xs">{errors?.mname?.message}</div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lname">Last Name *</Label>
                    <Input {...register("lname")} />
                    <div className="text-red-500 dark:text-red-600 text-xs">{errors?.lname?.message}</div>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input {...register("email")} />
                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.email?.message}</div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="empId">Employee ID *</Label>
                <Input {...register("empId")} />
                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.empId?.message}</div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="pfNumber">PF Number *</Label>
                <Input {...register("pfNumber")} />
                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.pfNumber?.message}</div>
            </div>
            <div className="flex space-x-2">
                <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date *</Label>
                    <Input type="date" {...register("startDate", { valueAsDate: true })} />
                    <div className="text-red-500 dark:text-red-600 text-xs">{errors?.startDate?.message}</div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="endDate" className="flex items-center gap-1">
                        End Date
                        <HoverCard>
                            <HoverCardTrigger>
                                <Info className="w-4" />
                            </HoverCardTrigger>
                            <HoverCardContent>Leave empty if the employee is still active</HoverCardContent>
                        </HoverCard>
                    </Label>
                    <Input type="date" {...register("endDate")} />
                    <div className="text-red-500 dark:text-red-600 text-xs">{errors?.endDate?.message}</div>
                </div>
            </div>
            <Button type="submit">Submit</Button>
            {/* <DialogClose ref={dialogCloseRef}></DialogClose> */}
        </form>
    );
}
