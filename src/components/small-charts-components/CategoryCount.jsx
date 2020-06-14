import React from 'react'
import HorizontalCategoryCount from '../graphs/HorizontalCategoryCount'
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
            <h2 className='small-chart-title'>Sensitive Info by Category</h2>
            <h4 className='small-chart-subtitle'>Count of Data Sources</h4>
            <HorizontalCategoryCount data={dataObj}/>
        </div>
    )
}