import React from 'react'
import HorizontalGraph from '../graphs/HorizontalCoverageGraph'
import '../../styles/smallChart.css'
  
  
export default function CoverageChart(props) {
    const {sources} = props 
    
    // object with all key/values
    // separate keys/values??
    // loop through objects, return (file_coverage + table_coverage + db_coverage)
    //                                  (total_db + total_file + total_table)
    // transform to object with {name: dsx, coverage-percentage: #}
    var coverageObject = []

    if(sources) {
        sources.map((key, i) => {
            coverageObject[i] = {
            'name': key.name,
            'coverage-percentage': (key.file_coverage+ key.table_coverage + key.db_coverage)/ (key.total_file +key.total_db + key.total_table) * 100             
            }
        })
    }  

    return (
        <div className='small-chart-container'>
            <h2 className='small-chart-title'>Inspection Coverage</h2>
            <h4 className='small-chart-subtitle'>(By Data Sources)</h4>
            <HorizontalGraph  data={coverageObject}/>
        </div>
    )
}