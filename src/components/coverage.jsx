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
            <>
            <div> {dbCoverage} / {dbTotal} Databases </div>
            <div> {tableCoverage} / {tableTotal} Tables </div>
            <div> {fileCoverage} / {fileTotal} Files </div>
            </>
        )
    }
}