import React from 'react'
import MyResponsivePie from './graphs/InfoTypePie'
import '../styles/categoryType.css'
  
  
export default function CategoryType(props) {
    const {data} = props 

    const infoType = {
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
          if (item in infoType) {
              infoType[item] = data[0][item]
          }           
        })
    }

    const pieDataKeys = Object.keys(infoType)
    const pieDataValues = Object.values(infoType)
     
    const pieChartObject = pieDataKeys.map((key, i) => {
       return {'id':key, 'value': parseInt(pieDataValues[i], 10)}
        
    })

    


    return (
        <div className='category-type-container'>
            <h2 className='category-type-title'>Sensitive Info by Category</h2>
            <h4 className='category-type-subtitle'>Count of Data Sources</h4>
            <MyResponsivePie data={pieChartObject}/>
        </div>
    )
}