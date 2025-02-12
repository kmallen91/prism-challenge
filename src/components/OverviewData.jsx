import React from 'react'
import '../styles/overviewData.css'
import LineGraph from '../styles/prism-project-line-graph-img.png'
import CoverageReducer from './coverage'
import DataLocations from './DataLocations'

export default function OverviewData(props) {

    const {sources, info} = props
    
    return (
        <div className='overview-data-container'>
            <div className='issues-container'>
                <div className='issues-title'> Security Issues Resolved </div> 
                <div className='issues-number'> 
                {sources  ?  sources.reduce((acc, source) => {return source.resolved + acc}, 0) : (<h4>Loading..</h4>)} 
                </div>
                <img className='line-graph-img' src={LineGraph} alt='line graph img' />
            </div>
            <div className='inspection-container'>Inspection Coverage                
                {sources  ? <CoverageReducer sources ={sources}/> : (<h4>Loading..</h4>)}
            </div>
            <div className='locations-container'>
                <div className='locations-title'>Sensitive Data Locations </div>                 
                {sources  ? <DataLocations info ={info}/> : (<h4>Loading..</h4>)}
            </div>
        </div>
    )
}