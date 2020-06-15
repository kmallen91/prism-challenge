import React from 'react'

export default function CoverageReducer(props) {
    
    if (props.sources){
        
        const dbTotal = props.sources.reduce((acc, source) => {return source.total_db + acc}, 0)
        const fileTotal = props.sources.reduce((acc, source) => {return source.total_file + acc}, 0)
        const tableTotal = props.sources.reduce((acc, source) => {return source.total_table + acc}, 0)
        const dbCoverage = props.sources.reduce((acc, source) => {return source.db_coverage + acc}, 0)
        const fileCoverage = props.sources.reduce((acc, source) => {return source.file_coverage + acc}, 0)
        const tableCoverage = props.sources.reduce((acc, source) => {return source.table_coverage + acc}, 0)

        return (
            <div className='inspection-data'>
                <div className='inspection-info-container'> 
                <div className='inspection-number-container'>
                        <div className='inspection-number'> {dbCoverage} </div> 
                        <div className='inspection-total'> / {dbTotal} </div> 
                </div>        
                    <img />
                    <div className='inspection-db-label'> Databases </div>
                </div>
                <div className='inspection-info-container'> 
                    <div className='inspection-tables-number'>
                    <div className='inspection-number-container'>
                        <div className='inspection-number'> {tableCoverage} </div> 
                        <div className='inspection-total'> / {tableTotal} </div> 
                    </div>    
                    </div>
                    <img />
                    <div className='inspection-tables-label'> Tables </div> 
                </div>
                <div className='inspection-info-container'>
                    <div className='inspection-number-container'>
                        <div className='inspection-number'> {fileCoverage} </div> 
                        <div className='inspection-total'> / {fileTotal} </div> 
                    </div> 
                    <img />
                    <div className='inspection-files-label'> Files </div>
                </div>
            </div>
        )
    }
}