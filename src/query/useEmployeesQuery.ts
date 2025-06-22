import { instance } from "@/lib/instance";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
export const useEmployeesQuery = (initialPage: number) => {
    const [page, setPage] = useState(initialPage);

    const query = useQuery({
        queryKey: ["AllEmployees", page],
        queryFn: async () => {
            const response = await instance.get(`/employees?page=${page}&limit=5`);
            return response.data.data as Employee[];
        },
    });

    return {
        ...query,
        page,
        setPage,
        // Convenience method to refetch with current page
        refetch: () => query.refetch(),
    };
};

// Usage:
// const { data, refetch } = useEmployeesQuery(1);
// refetch() will use the current page
