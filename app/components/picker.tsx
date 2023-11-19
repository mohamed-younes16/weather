"use client"

import { City ,Country } from "country-state-city"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Select from "react-select"
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/20/solid"

type option= {
  value:{
    longitude:string;
    latitude:string;
    isoCode:string;
  },
  label:string
} | null
type city ={
  value :{
  name: string;
  countryCode: string;
  stateCode: string;
  latitude: string;
  longitude: string;
  },
  label:string

} | null



const Picker = () => {
    const [country , setcountry] = useState<option>(null)
    const [city , setcity] = useState<city>(null)

    const [Loading , setLoading] = useState(false)


const countriesoptions : any=  Country.getAllCountries().map(e=>(
  {
    value:{
  latitude:e.latitude,
  longitude:e.longitude,
  isoCode:e.isoCode},
  label:e.name}))

  
const router = useRouter()



function handlecountry (e: option ){
  setcountry(e)
  setcity(null)
}


function handlecity (e: city ){
  setLoading(  !location.pathname.toString().match(/\/\w+/g)    )
  setcity(e)
  const params = new URLSearchParams(e.value)
  
router.push(`/location?${params}`)
}
useEffect(() => {
console.log( !location.pathname.toString().match(/\/\w+/g)      )

}, [])


  return (<>
  <div className="mb-5">
     <div className="flex gap-4 text-white  items-center mb-4 "> 
 <GlobeAsiaAustraliaIcon height={30} />
 <p>Country </p>
  </div> 
    <Select value={country} options={countriesoptions} className=" !cursor-pointer" onChange={handlecountry} />

  </div>


  {country && <div className="">
    <div className="flex gap-4 text-white  items-center mb-4 "> 
    <GlobeAsiaAustraliaIcon height={30} />
    <p>City </p>
      
      </div> 
        <Select
        value={city}
         options={City.getCitiesOfCountry(country.value.isoCode)?.map(e=>({
          value:{
          latitude: e. latitude,
          longitude: e. longitude,
          countryCode: e. countryCode,
          name:e.name,
          stateCode: e.stateCode},
          label: e.name,
        }))} 
         className="!cursor-pointer" onChange={handlecity} />

{  !location.pathname.toString().match(/\/\w+/g)     && Loading && <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-white border-l-transparent mt-10   "/>}


    </div> }
  
    </>
  )
}

export default Picker