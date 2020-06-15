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
                <div className='inspection-db-container'> 
                    {dbCoverage} / {dbTotal} 
                    <img />
                    <div className='inspection-db-label'> Databases </div>
                </div>
                <div className='inspection-table-container'> 
                <div className='inspection-tables-number'> {tableCoverage} / {tableTotal} </div>
                    <img />
                    <div className='inspection-tables-label'> Tables </div> 
                </div>
                <div className='inspection-file-container'> 
                    {fileCoverage} / {fileTotal} 
                    <img />
                    <div className='inspection-files-label'> Files </div>
                </div>
            </div>
        )
    }
}