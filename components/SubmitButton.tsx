import React from 'react'
import { Button, ButtonProps } from './ui/button'
import Image from 'next/image'



interface SubmitButtonProps {
    isLoading:boolean,
    className?:string,
    children?:React.ReactNode,

}
export default function SubmitButton({isLoading,className,children}:SubmitButtonProps) {
  return (
    <div>
      <Button type='submit' disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
      {isLoading?
      <div>
        <Image src="/assets/loader.svg" alt="loader" width={20} height={20} />
        Loading...
      </div>
       : children
    }
      
      
      </Button>
    </div>
  )
}
