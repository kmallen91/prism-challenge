const router = require('express').Router()
const data = require('./dataModel')

router.get('/', (req, res) => {
    data
        .getDataSource()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('error from data source get', err)
            res.status(500).json({message: 'error getting data sources'})
        })
})

router.get('/info', (req, res) => {
    data 
        .getInfo()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('error from info get', err)
            res.status(500).json({message: 'error getting info objects'})
        })
})

module.exports = router