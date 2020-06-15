import React from 'react'

export default function DataLocations(props) {
    
    let files = 0
    let databases = 0
    let sources = 0
    let tables = 0

    if (props.info){
        
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
            <div className='locations-data-container'>
                <div className='locations-data'> 
                    <div className='locations-number'> {files} </div> 
                    <div className='locations-label'> Files </div>
                </div>
                <div className='locations-data'> 
                   <div className='locations-number'> {sources} </div> 
                   <div className='locations-label'> Data Sources </div> 
                </div>
                <div className='locations-data'> 
                    <div className='locations-number'> {tables} </div> 
                    <div className='locations-label'> Tables </div>  
                </div>
                <div className='locations-data'> 
                    <div className='locations-number'> {databases} </div> 
                    <div className='locations-label'> Databases </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <h4>Loading..</h4>
        )
    }
}