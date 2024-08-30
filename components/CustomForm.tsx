'use client'

import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FieldTypes } from '../components/FormDetails'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



  interface Customprops {
    control: Control<any>,
    fieldType:FieldTypes,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?:  string ,
    iconAlt?: string,
  }

  const RenderField=({field,props}:{field:any;props:Customprops}) => {
    const {fieldType,placeholder} = props;
    switch(props.fieldType){
      case FieldTypes.INPUT:{
        return(
          <div className='flex bg-dark-400 border border-dark-500 rounded-xl'>
            {/* {iconSrc && (
              <Image src={iconSrc} alt={iconAlt} width={24} height={24} className='' />
            ) } */}
            <FormControl>
              <Input {...field} placeholder={placeholder} className='shad-input border-none rounded-xl' />
            </FormControl>
          </div>
        )
      }
      case FieldTypes.PHONE_iNPUT:{
        const [value, setValue] = useState()
        return(
          <FormControl>
            
            <PhoneInput 
            defaultCountry='IN'
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className='input-phone'
            />
          </FormControl>
        )
      }
      
    }

  }
export default function CustomForm(props: Customprops) {
  const {control,fieldType,name,label} = props;
  return (
    <div>
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
               {fieldType !== FieldTypes.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>  
                 
               )}

              <RenderField field={field} props={props}/>
              
            </FormItem>
          )}
        />
       
    </div>
  )
}
