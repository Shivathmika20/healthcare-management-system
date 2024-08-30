'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import CustomForm from "./CustomForm"
import { useState } from "react"
import { createUser } from "@/lib/actions/patient.actions"
import { useRouter } from "next/navigation"
import {formSchema } from "@/lib/validation"
// import {onHandleSubmit} from "../lib/actions/submit"



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
  const router=useRouter();
  // const [isLoading, setIsLoading]=useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      email:"",
      phone:"",     
    },
  })
 
  // 2. Define a submit handler.
  async function onHandleSubmit({name,email,phone}: z.infer<typeof formSchema>) {
    // setIsLoading(true);
   
    try{
      const userData={name,email,phone};
      console.log(userData);
      const newUser=await createUser(userData);
      console.log("New User:", newUser);
      if(newUser){
        router.push(`/patients/${newUser.$id}/register`);
      }
      // if (newuse) {
      //   router.push(`/patients/${newuse.$id}/register`);
      // }
          

    }
    catch(err){
      console.log(err);
    }
    
    
    
  }


  return (
    <div>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onHandleSubmit)} className="space-y-4">
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
            name="phone"
            label="Phone"
            placeholder="+91 9253635412"
            iconSrc="..\public\assets\icons\email.svg"
            iconAlt="user emial"
            />
            {/* <SubmitButton isLoading={isLoading}>Get started</SubmitButton> */}
          
            <Button type="submit" className='shad-primary-btn w-full'>Submit</Button>
         
          </form>
    </Form>
    </div>
  )
}
