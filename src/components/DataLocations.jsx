import React from 'react'

export default function DataLocations(props) {
    
    let files = 0
    let databases = 0
    let sources = 0
    let tables = 0

    if (props.info){
        console.log(props.info[0].location === 'file')
        props.info.forEach(item => {
            if (item.location === 'file'){
               return files += 1
            }
            else if (item.location === 'data-source'){
               return sources += 1
            }
            if (item.location === 'table'){
               return tables += 1
            }
            if (item.location === 'database'){
               return databases += 1
            }
            
        })

        return (
            <>
            <div> {files} Files </div>
            <div> {sources} Data Sources </div>
            <div> {tables} Tables </div>
            <div> {databases} Databases </div>
            </>
        )
    }

    else {
        return (
            <h4>Loading..</h4>
        )
    }
}