import Image from "next/image";
import { Button } from "../components/ui/button";
import FormDetails from "@/components/FormDetails";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-md">
          <Image src="/assets/icons/logo-full.svg" alt="logo" width={1000} height={1000} className="h-10 mb-14 w-fit"/>
        
        <FormDetails/>
        
        <div className="text-14-regular mt-20 flex justify-between">
          <span className="copyright ">© 2024 CarePulse</span>
          <Link href="/?admin=true" className="text-green-500 ">Admin</Link>
        </div>

        </div>
      </section>
      <Image src="/assets/images/onboarding-img.png" alt="logo" width={1000} height={1000} className="max-w-[50%] "/>
    </div>
    
  );
}
