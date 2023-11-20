"use client"
import Picker from "./components/picker";
import { Card , Subtitle , } from "@tremor/react"

export default function Home() {
  return (
    <main suppressHydrationWarning className="px-2 h-screen overflow-x-hidden flex items-center justify-center">
     
     <Card decoration="top" className=" flex max-w-4xl  items-center flex-col bg-white" 
      decorationColor="indigo" 
      >
        <p className=" font-bold max-md:!text-3xl dark:text-blue-100   text-4xl mb-12">
          Weaher Api & charts 
        </p>
          <Subtitle className=" max-w-sm  dark:text-blue-100 text-xl">
            Powered  Nextjs 13.4, Tailwindcss,Tremor 2.0 , 
            and more  
          </Subtitle>
            <Card className=" !bg-gradient-to-br   mt-12  !from-[#394f68] !to-[#183B7e]">
            <Picker/>
          </Card>
      </Card>
    </main>
  )
}
