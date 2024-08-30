import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2,{message:"Username must be 2 characters.",}).max(20),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone)=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone),{message:"Invalid phone number",}),
    
  })