import React from 'react'
import '../styles/overviewData.css'
import CoverageReducer from './coverage'
import DataLocations from './DataLocations'

export default function OverviewData(props) {

    const {sources, info} = props
    
    return (
        <div className='overview-data-container'>
            <div className='issues-container'>Security Issues Resolved <br/> {sources  ? sources.reduce((acc, source) => {return source.resolved + acc}, 0) : (<h4>Loading..</h4>)} </div>
            <div className='inspection-container'>Inspection Coverage <br/> {sources  ? <CoverageReducer sources ={sources}/> : (<h4>Loading..</h4>)}</div>
            <div className='locations-container'>Sensitive Data Locations <br/> {sources  ? <DataLocations info ={info}/> : (<h4>Loading..</h4>)}</div>
        </div>
    )
}