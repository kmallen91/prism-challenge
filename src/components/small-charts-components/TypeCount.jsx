import React from 'react'
import HorizontalCount from '../graphs/HorizontalCount'
import '../../styles/smallChart.css'

  
  
export default function InfoType(props) {
    const {data} = props 

    if(data) {
        data.map((item, i) => {
            data[i]['type-count'] = i+2
        })        
    }

    return (
        <div className='small-chart-container'>
            <h2 className='small-chart-title'>Sensitive Info by Type</h2>
            <h4 className='small-chart-subtitle'>Count of Data Sources</h4>
            <HorizontalCount data={data}/>
        </div>
    )
}