import React from 'react'
import MyResponsivePie from './InfoTypePie'
import '../styles/categoryType.css'
  
  
export default function CategoryType(props) {
    const {data, info} = props 

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
        console.log('data from type pie', data[0])
        console.log('sourceDataKeys', sourceDataKeys, infoType)
        sourceDataKeys.filter(item => {
          if (item in infoType) {
              infoType[item] = data[0][item]
          }           
        })
    }

    const pieDataKeys = Object.keys(infoType)
    const pieDataValues = Object.values(infoType)
     
    const pieChartObject = pieDataKeys.map((key, i) => {
       return {'id':key, 'value':pieDataValues[i]}
        
    })

    console.log(pieChartObject)


    return (
        <div className='category-type-container'>
            <h2 className='category-type-title'>Sensitive Category by Type</h2>
            <h4 className='category-type-subtitle'>Sensitive Category by Type</h4>
            <MyResponsivePie data={pieChartObject}/>
        </div>
    )
}