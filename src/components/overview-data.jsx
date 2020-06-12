import React from 'react'
import '../styles/overviewData.css'
import { useEffect } from 'react'

export default function OverviewData(props) {

    const {sources} = props
    
    

    return (
        <div className='overview-data-container'>
            <div className='issues-container'>Security Issues Resolved <br/> {sources  ? sources.reduce((acc, source) => {return source.resolved + acc}, 0) : (<h4>Loading..</h4>)} </div>
            <div className='inspection-container'>Inspection Coverage <br/> 20/50</div>
            <div className='locations-container'>Sensitive Data Locations <br/> 5  4  4  8</div>
        </div>
    )
}