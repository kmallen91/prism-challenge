import React, {useState} from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas
  } from 'react-vis'
  import '../../node_modules/react-vis/dist/style.css';
  import '../styles/datadistribution.css'
  
  
export default function DataDistribution(props) {
    const {sources, info} = props


    


    return (
        <div className='stacked-graph-container'>
            <h2 className='stacked-graph-title'>Sensitive Data Distribution by Data Sources</h2>
            
        </div>
    )
}