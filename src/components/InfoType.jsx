import React from 'react'
import MyResponsivePie from './graphs/InfoTypePie'
import '../styles/infotype.css'
  
  
export default function InfoType(props) {
    const {data} = props 

    const infoType = {
        'swift':'',
        'email':'',
        'bank-account':'',
        'phone':'',
        'ssn':'',
        'aba':'',
        'passport':'',
        'dob':'',
        'credit-card':'',
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
        <div className='info-type-container'>
            <h2 className='info-type-title'>Sensitive Info by Type</h2>
            <h4 className='info-type-subtitle'>Count of Data Sources</h4>
            <MyResponsivePie data={pieChartObject}/>
        </div>
    )
}