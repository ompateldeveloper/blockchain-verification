"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { instance } from "@/lib/instance";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const schema = z.object({
    companyName: z.string().min(2, "Company name must be at least 2 characters long"),
    companyAddress: z.string().min(2, "Company address must be at least 2 characters long"),
    companyPhone: z.string().min(2, "Company phone must be at least 2 characters long"),
    companyEmail: z.string().email(),
    companyWebsite: z.string().url(),
});
type FormData = z.infer<typeof schema>;
export default function Page() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const [logo, setLogo] = useState(null);
    const [sign, setSign] = useState(null);
    const onSubmit: SubmitHandler<FormData> = (data) => {
        instance
            .post("/admin/company", data)
            .then(() => {
                reset();
            })
            .catch((error) => {
                console.error("Error updating company:", error);
            });
    };
    useEffect(() => {
        instance
            .get("/admin/company/")
            .then((response) => {
                reset(response.data.data);
                setLogo(response.data.data.companyLogo);
                setSign(response.data.data.companySign);
            })
            .catch((error) => {
                console.error("Error fetching company details:", error);
            });

    }, []);

    return (
        <div className="py-4">
            {/* <Card> */}
            <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>Add Data Related to company </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 md:space-x-4  ">
                <Card>
                    <CardHeader>
                        <CardTitle>Company Media</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="">
                            <div className="text-lg font-semibold py-2">Company Logo</div>
                            <div className="flex items-center justify-center h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                {logo === null ? <span className="text-gray-500 dark:text-gray-400">No logo uploaded</span> : <img src={logo} alt="logo" />}
                            </div>
                            <ImageUploadForm />
                        </div>
                        <div className="">
                            <div className="text-lg font-semibold py-2">Company Sign</div>

                            <div className="flex items-center justify-center h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                {sign === null ? <span className="text-gray-500 dark:text-gray-400">No logo uploaded</span> : <img src={sign} alt="sign" />}
                            </div>
                            <SignUploadForm />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Company Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-2">
                                <Label htmlFor="companyName">Name *</Label>
                                <Input {...register("companyName")} />
                                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.companyName?.message}</div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyAddress">Address *</Label>
                                {/* <Input {...register("companyAddress")} /> */}
                                <Textarea {...register("companyAddress")}></Textarea>
                                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.companyAddress?.message}</div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyPhone">Phone *</Label>
                                <Input {...register("companyPhone")} />
                                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.companyPhone?.message}</div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyEmail">Email *</Label>
                                <Input {...register("companyEmail")} />
                                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.companyEmail?.message}</div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyWebsite">Website *</Label>
                                <Input {...register("companyWebsite")} />
                                <div className="text-red-500 dark:text-red-600 text-xs">{errors?.companyWebsite?.message}</div>
                            </div>
                            <div className="mt-4">
                                <Button>Submit</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </CardContent>
            {/* </Card> */}
        </div>
    );
}

function ImageUploadForm() {
    const [preview, setPreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null); // Store file object separately
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file); // Store selected file
            setPreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };
    const reset = () => {
        setPreview(null);
        setImageFile(null);
        if (inputRef.current && inputRef.current.files) {
            inputRef.current.value = "";
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!imageFile) {
            console.error("No image selected");
            return;
        }

        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append("file", imageFile);

            const response = await instance.post("/admin/company/logo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            reset();
            console.log("Upload successful:", response.data);
            // Handle successful upload (e.g., update UI, success message)
        } catch (error) {
            console.error("Upload failed:", error);
            // Handle error (e.g., show error message)
        } finally {
            setIsUploading(false);
        }
    };

    // Cleanup preview URL on component unmount
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex items-end gap-2 py-1">
                    <Input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        id="image"
                        onChange={handleImageChange} // Custom logic for setting preview
                    />
                    <Button type="submit" disabled={isUploading}>
                        {isUploading ? "Uploading..." : "Submit"}
                    </Button>
                </div>

                {preview && (
                    <div>
                        <p>Preview:</p>
                        <X onClick={reset} />
                        <img src={preview} alt="Preview" style={{ maxWidth: "300px" }} />
                    </div>
                )}
            </form>
        </>
    );
}

function SignUploadForm() {
    const [preview, setPreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null); // Store file object separately
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file); // Store selected file
            setPreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };
    const reset = () => {
        setPreview(null);
        setImageFile(null);
        if (inputRef.current && inputRef.current.files) {
            inputRef.current.value = "";
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!imageFile) {
            console.error("No image selected");
            return;
        }

        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append("file", imageFile);

            const response = await instance.post("/admin/company/sign", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            reset();
            console.log("Upload successful:", response.data);
            // Handle successful upload (e.g., update UI, success message)
        } catch (error) {
            console.error("Upload failed:", error);
            // Handle error (e.g., show error message)
        } finally {
            setIsUploading(false);
        }
    };

    // Cleanup preview URL on component unmount
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex items-end gap-2 py-1">
                    <Input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        id="image"
                        onChange={handleImageChange} // Custom logic for setting preview
                    />
                    <Button type="submit" disabled={isUploading}>
                        {isUploading ? "Uploading..." : "Submit"}
                    </Button>
                </div>

                {preview && (
                    <div>
                        <p>Preview:</p>
                        <X onClick={reset} />
                        <img src={preview} alt="Preview" style={{ maxWidth: "300px" }} />
                    </div>
                )}
            </form>
        </>
    );
}
