import React from 'react'
import MyResponsiveBar from './ResponsiveBar'
import '../styles/datadistribution.css'
  
  
export default function DataDistribution(props) {
    const {data} = props 

    return (
        <div className='stacked-graph-container'>
            <h2 className='stacked-graph-title'>Sensitive Data Distribution by Data Sources</h2>
            <MyResponsiveBar className='stacked-graph' data={data}/>
        </div>
    )
}