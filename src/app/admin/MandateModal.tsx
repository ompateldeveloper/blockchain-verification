"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { instance } from "@/lib/instance";

declare global {
    interface Window {
        ethereum?: any;
    }
}
import useUserStore from "@/store/useUserStore";
import { useLayoutEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function MandateModal() {
    const { pk, updatePk } = useUserStore();

    const [connected, setConnected] = useState(false);
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
    async function connectWalletAndupdate() {
        // if (!connected) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const _walletAddress = await signer.getAddress();
        await instance
            .post("/admin/pk", {
                pk: _walletAddress,
            })
            .then((data) => {
                setConnected(true);
                updatePk(data.data.pk);
                setWalletAddress(_walletAddress);
            })
            .catch((error) => {
                setConnected(false);
                console.log(error);

                // toast({
                //     title: "Unable to connneect request failed",
                //     description: error,
                // });
            });
        // } else {
        //     // Disconnect the wallet
        //     setWalletAddress("");
        //     setConnected(false);
        //     await window.ethereum.request({
        //         method: "wallet_revokePermissions",
        //         params: [
        //             {
        //                 eth_accounts: {},
        //             },
        //         ],
        //     });
        //     window.ethereum.selectedAddress = null;
        // }
    }
    return (
        <div>
            {(!pk || pk === "") && (
                <div className="absolute bg-zinc-900 z-40 top-0 h-screen flex items-center justify-center py-16 w-screen ">
                    <Card className="max-w-md max-h-96">
                        <CardHeader>
                            <CardTitle>Need Attention</CardTitle>
                            <CardDescription>Your account need to Register Admin to Blockchain.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-semibold">Connect & Register your wallet into Syetem</div>
                            <Button className="ml-auto" onClick={connectWalletAndupdate}>
                                Connect
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
