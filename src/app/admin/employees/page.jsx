"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EmployeesTable from "./EmployeesTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AddEmployee from "./AddEmployee";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ChevronDown, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { useSearchParams } from "next/navigation";

export default function EmployeesPage() {
    const [connected, setConnected] = useState();
    const [walletAddress, setWalletAddress] = useState("");
    // const searchParams = useSearchParams()
    async function checkMetaMaskConnection() {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.listAccounts();

            if (accounts.length > 0) {
                // MetaMask is connected, accounts[0] contains the connected address
                setConnected(true);
                return true;
            } else {
                // MetaMask is not connected
                console.log("MetaMask is installed but not connected.");
                setConnected(false);
                return false;
            }
        } else {
            console.log("MetaMask is not installed.");
            setConnected(false);
            return false;
        }
    }
    useEffect(() => {
        checkMetaMaskConnection();
    }, []);

    async function connectWallet() {
        if (!connected) {
            // Connect the wallet using ethers.js
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const _walletAddress = await signer.getAddress();
            setConnected(true);
            setWalletAddress(_walletAddress);
        } else {
            // Disconnect the wallet
            setWalletAddress("");
            setConnected(false);
            await window.ethereum.request({
                method: "wallet_revokePermissions",
                params: [
                    {
                        eth_accounts: {},
                    },
                ],
            });
            // window.ethereum.selectedAddress = null;
        }
    }
    return (
        <div className="container mx-auto md:py-10 p-4 ">
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <div className="flex-col">
                            <CardTitle>Employee List</CardTitle>
                            <CardDescription>Here you can view all employees</CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Info className="w-5" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <div className="text-xs text-zinc-500 "> Add Employee Data to Blockchain</div>
                                </HoverCardContent>
                            </HoverCard>
                            <Dialog>
                                <DialogTrigger className="">
                                    <Button asChild>
                                        <div className="">Add</div>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent >
                                    {connected ? (
                                        <Popover >
                                            <PopoverTrigger className="w-fit">
                                                <div className="text-xs text-zinc-500 flex items-center gap-1 w-fit">
                                                    <div className="bg-green-500 w-2 h-2 rounded-full"></div> Connected to Metamask <ChevronDown className="w-4" /> 
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent align="start" className="w-min p-1" >
                                                <Button onClick={connectWallet} variant='destructive'>
                                                    Disconnect Wallet
                                                </Button>
                                            </PopoverContent>
                                        </Popover>
                                    ) : (
                                        <div className="">
                                            <div className="text-zinc-500 font-semibold text-lg">It looks like You are not Connected to Metamask</div>
                                            <Button className="btn" onClick={connectWallet}>
                                                Connect Wallet
                                            </Button>
                                        </div>
                                    )}
                                    {connected && (
                                        <div className="">
                                            <DialogTitle>Add Employee</DialogTitle>
                                            <DialogDescription className="mb-2">Fill in the details of the employee</DialogDescription>
                                            <AddEmployee />
                                        </div>
                                    )}
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <EmployeesTable />
                </CardContent>
            </Card>
        </div>
    );
}
