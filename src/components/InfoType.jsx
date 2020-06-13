import React from 'react'
import MyResponsivePie from './InfoTypePie'
import '../styles/infotype.css'
  
  
export default function InfoType(props) {
    const {data, info} = props 

    const infoType = {
        'swift':'',
        'email':'',
        'bank-account':'',
        'ssn':'',
        'aba':'',
        'passport':'',
        'dob':'',
        'credit-card':'',
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
        <div className='info-type-container'>
            <h2 className='info-type-title'>Sensitive Info by Type</h2>
            <h4 className='info-type-subtitle'>Sensitive Info by Type</h4>
            <MyResponsivePie data={pieChartObject}/>
        </div>
    )
}