import React from 'react'
import MyResponsivePie from '../graphs/InfoTypePie'
import '../../styles/smallChart.css'
  
  
export default function CategoryType(props) {
    const {data} = props 

    const infoCategory = {
        'PII':'',
        'HIPAA':'',
        'PCI':'',
        'FERPA':'',
        'Class7':'',
        'Class6':'',
        'Class5':'',
        'Class4':'',
        'Class3':'',
    }
    
    const sourceDataKeys = Object.keys(data[0])
    if(data) {
        sourceDataKeys.filter(item => {
          if (item in infoCategory) {
              infoCategory[item] = data[0][item]
          }           
        })
    }

    const pieDataKeys = Object.keys(infoCategory)
    const pieDataValues = Object.values(infoCategory)
     
    const pieChartObject = pieDataKeys.map((key, i) => {
       return {'id':key, 'value': parseInt(pieDataValues[i], 10)}
        
    })   


    return (
        <div className='small-chart-container'>
            <h2 className='small-chart-title'>Sensitive Info by Category</h2>
            <h4 className='small-chart-subtitle'>(Count of Data Sources)</h4>
            <MyResponsivePie data={pieChartObject}/>
        </div>
    )
}