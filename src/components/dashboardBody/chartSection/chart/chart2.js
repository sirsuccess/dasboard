import React,{useState} from "react"
import {Line} from "react-chartjs-2"
import ChartData from "../../../../data/chartData"

function Chart2() {
    const data ={
        labels:["1","2","3","4","5"],
        datasets:[{
            labels: 'vidoes mades',
            backgroundColor: "rgba(255,0,255,0.75)",
            data: ChartData
        }
        ]
    }
    const [stateData, setStateData] = useState(data)

const setGradientColor= (canvas, color)=>{
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 600,550)
    gradient.addColorStop(0,color)
    gradient.addColorStop(0.95, "rgba(133,255,144,0.5)")
    return gradient;
}


    const getChartData = canvas=>{
const data = stateData;
if(data.datasets){
    let colors = ["rgba(255,0,255,0.75)","rgba(0,255,0.75)"]
    data.datasets.forEach((set, index)=>{
      set.backgroundColor= this.setGradientColor(canvas, colors[index]);
      set.borderColor="white";
        set.borderWidth = 2;
    })
}
return data
    }
    return(
        <div style={{position: "relative", width:"100%", height:"100%"}}>
            Chart
            <Line 
            options={{
                responsive: true
            }}
            data={stateData}
            >

            </Line>
        </div>
    )
}
export default Chart2;