const db = require('./data/dbConfig')

module.exports = {getDataSource, getInfo}

function getDataSource() {
    return db('data-source').select(
        'id', 
        'name', 
        'total_db', 
        'db_coverage', 
        'total_table',
        'table_coverage',
        'total_file',
        'file_coverage',
        'resolved'
        )
}

function getInfo() {
    return db('info').select(
        'id',
        'data_source',
        'type',
        'category', 
        'count',
        'location'
    )
}