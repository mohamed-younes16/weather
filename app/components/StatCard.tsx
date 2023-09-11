import { Card, Color, Metric, Text } from "@tremor/react"


const StatCard = ({title , value , color}:{color:Color,value:string,title:string}) => {
  return (
   <Card 
   decorationColor={color}
   decoration="top"
   className=" transition hover:scale-105"
   >
    <Text>{title} </Text>
    <Metric >
        {value}
    </Metric>

   </Card>
  )
}

export default StatCard