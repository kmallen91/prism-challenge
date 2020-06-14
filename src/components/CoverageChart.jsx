import React from 'react'
import HorizontalGraph from './HorizontalGraph'
import '../styles/coveragechart.css'
  
  
export default function CoverageChart(props) {
    const {sources} = props 
    console.log('data from coverage chart', sources)


    return (
        <div className='coverage-chart-container'>
            <h2 className='coverage-chart-title'>Inspection Coverage</h2>
            <h4 className='coverage-chart-subtitle'>(By Data Sources)</h4>
            {/* <HorizontalGraph  data={sources}/> */}
        </div>
    )
}