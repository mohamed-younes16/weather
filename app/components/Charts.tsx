
import { AreaChart, Card, Title } from "@tremor/react";
const Charts =async ({params}) => {
  

    const res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=temperature_2m,precipitation_probability,uv_index,relativehumidity_2m&daily=uv_index_max&timezone=auto`,{next:{revalidate:20}})
    const mainData = await   res2.json()
    
    const hourly = mainData?.hourly?.time.map( (e: string )=>new Date(e).toLocaleString("en-US",{hour:"numeric",hour12:true})).slice(0,24)
    
    const hourlydata = await hourly.map((e,i:number)=>({
        time:parseInt(e),
        uvIndex:mainData?.hourly?.uv_index[i],
        temperature:mainData?.hourly?.temperature_2m[i]
    }))
    
    const raindata = await hourly.map((e,i:number)=>({
      time:parseInt(e),
      rain:mainData?.hourly?. precipitation_probability[i]}))
      const humiditydata = await hourly.map((e,i:number)=>({
        time:parseInt(e),
        humidity:mainData?.hourly?.relativehumidity_2m[i]}))

    
    
  return (
    <div className="max-lg:max-w-[600px] mt-8 ">
        <Card className=" dark:shadow-inner border !border-slate-200 overflow-x-hidden dark:shadow-slate-200"> 
            <Title>Temperatur and UV_Index Chart </Title>
            <AreaChart
        index="time"
        className=" w-full mt-20"
        data={hourlydata}
        categories={["uvIndex", "temperature"]}
        colors={["yellow", "indigo"]}
        minValue={0}
        showLegend
        animationDuration={2000}

        
        />
        </Card>
        <Card className="  mt-8 dark:shadow-inner border !border-slate-200 overflow-x-hidden dark:shadow-slate-200"> 
            <Title> Precipitation probability </Title>
            <AreaChart
        index="time"
        className=" w-full mt-20"
        data={raindata}
        categories={["rain"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        showLegend
        animationDuration={2000}
        
        
        />
        </Card>
        <Card className="  mt-8 dark:shadow-inner border !border-slate-200 overflow-x-hidden dark:shadow-slate-200"> 
            <Title>Humidity</Title>
            <AreaChart
        index="time"
        className="w-full mt-20"
        data={humiditydata}
        categories={["humidity"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        showLegend
        animationDuration={2000}
        
        
        />
        </Card>
    </div>
  )
}

export default Charts