"use client";
import { instance } from "@/lib/instance";
import { useState, useEffect } from "react";
import EditEmployee from "./EditEmployee";
import { useParams } from "next/navigation";

export default function Page() {
    // const id = (await params).id;
    const params = useParams<{ id: string }>();

    const [employee, setEmployee] = useState();

    async function fetchEmployeeData() {
        try {
            const response = await instance.get("/employees/" + params.id);
            setEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    }
    useEffect(() => {
        fetchEmployeeData();
    }, [params.id]);

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <EditEmployee employee={employee} />
        </div>
    );
}
