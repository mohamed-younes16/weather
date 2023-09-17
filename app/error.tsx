"use client"

import {useEffect} from 'react'

import { WifiIcon , ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { useRouter,usePathname, useSearchParams } from 'next/navigation'

const Error = ({err,res }) => {
    const router =useRouter()
    
    useEffect(() => {
    console.error(err)
    }, [])
    


  return (
    <div className=' w-screen h-screen fixed inset-0 flex flex-col gap-4 justify-center items-center'>
        <p className="text-3xl   animate-pulse text-red-600 font-bold">Check your connection  </p>
        <span className="flex  animate-pulse  text-red-700"><ExclamationTriangleIcon className=' h-10'/> <WifiIcon className=' h-10'/>  </span>  
        <div className="flex gap-4">

                <button className="bg-white text-2xl hover:text-white   p-2 transition hover:bg-black rounded-lg" onClick={()=>location.reload()} >try Again </button>
                <button className="bg-white  text-2xl w-28  hover:text-white transition hover:bg-black rounded-lg"onClick={()=>router.push("/")}> Home </button>
            </div>
    </div>
  )
}

export default Error