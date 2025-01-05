import { z } from "zod";

export const schema = z.object({
    fname: z.string().min(2, "First name must be at least 2 characters long"),
    mname: z.string().min(1, "Middle name must be at least 1 characters long").optional().or(z.literal("")),
    lname: z.string().min(2, "Last name must be at least 2 characters long"),
    email: z.string().email(),
    empId: z.string().min(1),
    pfNumber: z.string().min(1),
    startDate: z.date({ required_error: "Start date is required" }),
    endDate: z
        .string() // Accept a string input
        .optional() // Make it optional
        .transform((value) => (value ? new Date(value) : undefined)) // Convert to Date or undefined
        .refine((date) => (date ? !isNaN(date.getTime()) : true), {
            message: "Invalid date format", // Add error message if the date is invalid
        }),
});