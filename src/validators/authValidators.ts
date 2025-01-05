import { z } from "zod";

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const signupSchema = z.object({
    fname: z.string().min(2).max(255),
    lname: z.string().min(2).max(255),
    email: z.string().email(),
    password: z.string().min(8,'Password must be at least 8 characters long'),
});

export { signinSchema, signupSchema };
