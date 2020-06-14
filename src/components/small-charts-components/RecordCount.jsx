import React from 'react'
import HorizontalRecordCount from '../graphs/HorizontalRecordCount'
import '../../styles/smallChart.css'  
  
export default function InfoType(props) {
    const {data} = props 
    var dataObj = data
    if(data) {
        dataObj.map((item, i) => {
            dataObj[i]['category-count'] = i*2
        })        
    }

    return (
        <div className='small-chart-container'>
            <h2 className='small-chart-title'>Sensitive Data Record Count</h2>
            <h4 className='small-chart-subtitle'>(By Data Sources)</h4>
            <HorizontalRecordCount data={dataObj}/>
        </div>
    )
}