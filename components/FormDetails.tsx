"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import CustomForm from "./CustomForm"
import SubmitButton from "./SubmitButton"
import { useState } from "react"


const formSchema = z.object({
  name: z.string().min(2,{message:"Username must be 2 characters.",}).max(20),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine((phone)=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone),{message:"Invalid phone number",}),
  
})

export enum FieldTypes {
  INPUT="input",
  DATE="date",
  SELECT="select",
  TEXTAREA="textarea",
  CUSTOM="custom",
  CHECKBOX="checkbox",
  PHONE_iNPUT="phone-input",
  SKELETON="skeleton",


}


export default function FormDetails() {
  const [isLoading, setIsLoading]=useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",     
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit({name,email,phone}: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    console.log(name,email,phone);
    try{
        // const userData={name,email,phone}
        

    }
    catch(err){
      console.log(err);
    }
    
    
  }
  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <section className="space-y-4 mb-12">
          <h1 className="header">Hi There 👋....</h1>
          <p className="text-dark-700">Get started with Appointments.</p>
        </section>
        
        <CustomForm 
        fieldType={FieldTypes.INPUT}
        control={form.control}
        name="name"
        label="Full Name"
        placeholder="John Doe"
        iconSrc="..\public\assets\icons\user.svg" 
        iconAlt="userpic"
        />
        <CustomForm 
        fieldType={FieldTypes.INPUT}
        control={form.control}
        name="email"
        label="Email"
        placeholder="John Doe@gmail.com"
        iconSrc="..\public\assets\icons\email.svg"
        iconAlt="user emial"
        />
        <CustomForm 
        fieldType={FieldTypes.PHONE_iNPUT}
        control={form.control}
        name="phone "
        label="Phone"
        placeholder="+91 9253635412"
        iconSrc="..\public\assets\icons\email.svg"
        iconAlt="user emial"
        />
        <SubmitButton isLoading={isLoading}>Get started</SubmitButton>
      </form>
    </Form>
    </div>
  )
}
