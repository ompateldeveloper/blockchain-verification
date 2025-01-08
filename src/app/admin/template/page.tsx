"use client";
import { Button } from "@/components/ui/button";
import { instance } from "@/lib/instance";
import { Info, Plus } from "lucide-react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import QRCode from "react-qr-code";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    title: z.string().optional(),
    content1: z.string().optional(),
    content2: z.string().optional(),
    date: z.string().optional(),
    cid: z.string().optional(),
    footer: z.optional(z.string()),
});

type FormData = z.infer<typeof schema>;
type Company = {
    companyName: string;
    companyLogo: string;
    companySign: string;
    companyWebsite: string;
};

export default function Page() {
    const [template, setTemplate] = useState<FormData>();
    const [company, setCompany] = useState<Company>();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        instance.put("/admin/template", data);
    };
    function getTemplate() {
        instance
            .get("/admin/template")
            .then((response) => {
                setTemplate(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                // setTemplate({});
            });
    }
    function getCompany() {
        instance
            .get("/admin/")
            .then((response) => {
                setCompany(response.data.data);
            })

            .catch((error) => {
                console.log(error);
                // setTemplate(null);
            });
    }
    useLayoutEffect(() => {
        getTemplate();
        getCompany();
    }, []);

    useEffect(() => {
        reset(template);
    }, [template]);

    function createTemplate() {
        instance
            .post("/admin/template/create")
            .then((response) => {
                setTemplate(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                // setTemplate(null);
            });
    }

    function resolveString(template: string, data: any) {
        return template.replace(/{{(.*?)}}/g, (match, key) => {
            return data[key.trim()] ?? `{{${key}}}`;
        });
    }

    const mockData = {
        name: "John Doe",
        empId: "12345",
        companyName: company?.companyName || "Tech Corp",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
    };

    if (template === null) {
        return (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <div className="">Looks like you dont have template</div>
                <Button onClick={createTemplate}>
                    Create New Template <Plus />
                </Button>
            </div>
        );
    }
    return (
        <div className="flex gap-4 [&>*]:flex-1 py-4">
            <div className="edit max-w-md">
                <Card>
                    <CardHeader>
                        <CardTitle>Template Editor</CardTitle>
                        <CardDescription>Edit the template details below</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" {...register("name")} />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" {...register("title")} />
                                {errors.title && <p>{errors.title.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="content1">Content 1</Label>
                                <Textarea id="content1" {...register("content1")} />
                                {errors.content1 && <p>{errors.content1.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="content2">Content 2</Label>
                                <Textarea id="content2" {...register("content2")} />
                                {errors.content2 && <p>{errors.content2.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="date">Date</Label>
                                <Input id="date" {...register("date")} />
                                {errors.date && <p>{errors.date.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="cid">CID</Label>
                                <Input id="cid" {...register("cid")} />
                                {errors.cid && <p>{errors.cid.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="footer">Footer</Label>
                                <Input id="footer" {...register("footer")} />
                                {errors.footer && <p>{errors.footer.message}</p>}
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="preview">
                {/* <Card> */}
                <CardHeader>
                    <CardTitle>Preview</CardTitle>
                </CardHeader>
                <Card className="w-full max-w-4xl bg-white shadow-lg relative">
                    <CardContent className="p-8">
                        <div className=" absolute top-0 left-8 bg-green-500 text-white px-2 py-1 rounded-br rounded-bl flex ">
                            Certificate Verified by&nbsp;<span className="font-semibold"> Blockchain</span>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Info className="w-6 px-1" />
                                </HoverCardTrigger>
                                <HoverCardContent className="space-y-2">
                                    <CardTitle>Verified By Blockchain</CardTitle>
                                    <CardDescription>
                                        This certificate has been verified using blockchain technology. The authenticity of this document can be confirmed by scanning the QR code or visiting our
                                        verification portal.
                                    </CardDescription>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="text-left">
                                <h1 className="text-zinc-600 font-semibold text-primary mb-2">Issued by:</h1>
                                <img src={company?.companyLogo} className="w-40 aspect-auto" alt="Company Logo" />
                            </div>
                            <div className="flex flex-col items-center justify-between space-y-0">{<QRCode className="w-48 h-48" value={"I am Atomic"} />}</div>
                        </div>
                        <div className="mt-8 text-center">
                            <h2 className="text-2xl font-semibold mb-6">{watch("title")}</h2>
                            <p className="text-lg text-gray-800 mb-6">{resolveString(String(watch("content1")), mockData)}</p>
                            <p className="text-lg text-gray-800 mb-6">{watch("content2")}</p>
                            <div className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto mt-8">
                                <div className="text-center">
                                    <p className="font-semibold">Issue Date</p>
                                    <p className="text-sm text-gray-500">{watch("date")}</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold">Certificate ID</p>
                                    <p className="text-sm text-gray-500">{watch("cid")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-200 w-full">
                            <p className="mb-4">
                                Best Regards,
                                <br />
                                For ACCENTIQA SYSTEMS PRIVATE LIMITED
                            </p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <img src={company?.companySign} className="w-36 aspect-auto" alt="Signature" />
                                    <p className="font-semibold">Radhika K</p>
                                    <p className="text-sm text-gray-500">Director</p>
                                    <p className="text-sm text-gray-500">{company?.companyName}</p>
                                    <p className="text-sm text-gray-500">{company?.companyWebsite}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/* </Card> */}
            </div>
        </div>
    );
}
