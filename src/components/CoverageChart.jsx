import React from 'react'
import HorizontalGraph from './graphs/HorizontalGraph'
import '../styles/coveragechart.css'
  
  
export default function CoverageChart(props) {
    const {sources} = props 
    console.log('data from coverage chart', sources)
    
    // object with all key/values
    // separate keys/values??
    // loop through objects, return (file_coverage + table_coverage + db_coverage) / 
    //                                  (total_db + total_file + total_table)
    // transform to object with {name: dsx, coverage-percentage: #}
    var coverageObject = []
    // ds1[item.type] ? ds1[item.type]++ : ds1[item.type] = 1
    if(sources) {
        sources.map((key, i) => {
            coverageObject[i] = {
            'name': key.name,
            'coverage-percentage': (key.file_coverage+ key.table_coverage + key.db_coverage)/ (key.total_file +key.total_db + key.total_table) * 100             
            }
        })
        console.log(coverageObject)
    }
    


    return (
        <div className='coverage-chart-container'>
            <h2 className='coverage-chart-title'>Inspection Coverage</h2>
            <h4 className='coverage-chart-subtitle'>(By Data Sources)</h4>
            <HorizontalGraph  data={coverageObject}/>
        </div>
    )
}