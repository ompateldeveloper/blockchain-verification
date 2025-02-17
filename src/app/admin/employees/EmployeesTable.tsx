"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { MoreHorizontal } from "lucide-react";
import { instance } from "@/lib/instance";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { abi } from "public/EmployeeExperience.json";
import { toast, useToast } from "@/hooks/use-toast";

interface Employee {
    id: number;
    empId: string;
    empHash: string;
    fname: string;
    mname: string;
    lname: string;
    startDate: string;
    endDate: string;
    pfNumber: string;
}
export default function EmployeesTable() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const router = useRouter();
    useEffect(() => {
        fetchEmployees();
    }, [page]);

    const fetchEmployees = async () => {
        try {
            instance
                .get(`/employees?page=${page}&limit=5`)
                .then((response) => {
                    setEmployees(response.data.data);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.error("Error fetching employees:", error);
                });
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const handlePrevPage = () => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prev) => Math.min(prev + 1, totalPages));
    };
    const handleDelete = (id: string) => {
        instance
            .delete(`/employees/${id}`)
            .then((response) => {
                fetchEmployees();
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
            });
    };
    const AddToBlockchain = async (data: Employee) => {
        const provider = new ethers.BrowserProvider((window as any)?.ethereum);
        const signer = await provider.getSigner();

        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

        if (!contractAddress) {
            throw new Error("Contract address is not defined");
        }

        const contract = new ethers.Contract(contractAddress, abi, signer);

        const tx = await contract.addExperience(data.empId, `${data.fname} ${data.mname} ${data.lname}`, "Accentiqa", String(data.startDate), String(data.endDate), data.pfNumber);
        const receipt = await tx.wait();
        console.log(tx, "tx");
        console.log(receipt, "receipt");

        const payload: {
            empHash: string;
            tx: string;
        } = {
            empHash: receipt.logs[0].args[0],
            tx: tx.hash || "",
        };
        return payload;
    };
    const handleTakeAction = async (data: Employee) => {
        try {
            const { empHash, tx } = await AddToBlockchain(data);
            instance
                .post(`/employees/update-hash/${data.empId}`, { empHash, tx })
                .then(() => {
                    toast({
                        title: "Updated",
                        description: "Blockchain map of employee has been added!",
                    });
                })
                .catch((error) => {
                    console.error("Error adding employee:", error);
                });
        } catch (error) {
            toast({
                title: "Error Updating",
                description: "Transaction cancelled by User, Data not added to blockchain",
                variant: "destructive",
            });
        }
    };

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Employee ID</TableHead>
                        <TableHead>Employee Hash</TableHead>
                        <TableHead>Employee Name</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>Active Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} className="text-center">
                                No employees found
                            </TableCell>
                        </TableRow>
                    ) : (
                        employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell className="truncate max-w-32 ">{employee.empId}</TableCell>
                                <TableCell className="truncate max-w-64">
                                    {employee.empHash == null ? <span className="text-red-500 dark:text-red-600 text-xs ">Action Required</span> : employee.empHash}
                                </TableCell>
                                <TableCell>{`${employee.fname} ${employee.mname || ""} ${employee.lname}`}</TableCell>
                                <TableCell>{format(new Date(employee.startDate), "PP")}</TableCell>
                                <TableCell>{employee.endDate ? "Inactive" : "Active"}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>

                                            <DropdownMenuItem
                                                onClick={() => {
                                                    router.push("/admin/employees/" + employee.empId);
                                                }}
                                            >
                                                Edit details
                                            </DropdownMenuItem>
                                            {!employee.empHash && <DropdownMenuItem onClick={() => handleTakeAction(employee)}>Take Action</DropdownMenuItem>}
                                            {employee.endDate && employee.empHash && (
                                                <DropdownMenuItem
                                                    onClick={() => {
                                                        router.push("/certificate/" + employee.empId);
                                                    }}
                                                >
                                                    View Certificate
                                                </DropdownMenuItem>
                                            )}
                                            <DropdownMenuItem className="text-red-500 dark:text-red-600" onClick={() => handleDelete(employee.empId)}>
                                                Delete Employee Data
                                            </DropdownMenuItem>

                                            {/* <AlertDialog>
                                                <AlertDialogTrigger>
                                                    
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Are you sure you ant to Delete?</AlertDialogTitle>
                                                        <AlertDialogDescription>This action cannot be undone. This will permanently delete Employee data from database</AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction className="bg-red-500 hover:bg-red-500/90" >
                                                            Delete
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog> */}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
                {/* <Button onClick={handlePrevPage} disabled={page === 0}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                </Button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <Button onClick={handleNextPage} disabled={page === totalPages}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                </Button> */}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" onClick={handlePrevPage} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" onClick={handleNextPage} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
