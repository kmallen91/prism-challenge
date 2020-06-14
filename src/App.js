import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// Components
import Navbar from './components/nav'
import Overview from './components/overview'
import OverviewData from './components/overview-data'
import DataDistribution from './components/DataDistribution'
import InfoType from './components/small-charts-components/InfoType'
import CategoryType from './components/small-charts-components/CategoryType'
import CoverageChart from './components/small-charts-components/CoverageChart'
import TypeCount from './components/small-charts-components/TypeCount'
import CategoryCount from './components/small-charts-components/CategoryCount'
import RecordCount from './components/small-charts-components/RecordCount'

// Styles
import './styles/App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// create DS objects containing each type, category, and count for each data source
// loop through info and tally all where source_id == data source #

function App() {

  const classes = useStyles()
  const [sources, setSources] = useState()
  const [info, setInfo] = useState()

  useEffect(() => {
    axios 
      .get('https://prism-challenge-backend.herokuapp.com/data')
      .then(res => setSources(res.data))
      .catch(err => console.log('error from sources get', err))
    }, [])
    
  useEffect(() => {
      axios 
      .get('https://prism-challenge-backend.herokuapp.com/data/info')
      .then(res => setInfo(res.data))
      .catch(err => console.log('error from info get', err))
    }, [])

  const ds1 = {'data_source':'DS1'}
  const ds2 = {'data_source':'DS2'}
  const ds3 = {'data_source':'DS3'}
  const ds4 = {'data_source':'DS4'}
  const ds5 = {'data_source':'DS5'}
  const ds6 = {'data_source':'DS6'}

  if (info){
    info.forEach(item => {
      if (item.source_id === 1) {
        ds1[item.type] ? ds1[item.type]++ : ds1[item.type] = 1
        ds1[item.category] ? ds1[item.category]++ : ds1[item.category] = 1
        ds1['count'] ? ds1['count'] += item.count : ds1['count'] = item.count
      }
      else if (item.source_id === 2) {
        ds2[item.type] ? ds2[item.type]++ : ds2[item.type] = 1
        ds2[item.category] ? ds2[item.category]++ : ds2[item.category] = 1
        ds2['count'] ? ds2['count'] += item.count : ds2['count'] = item.count
      }
      else if (item.source_id === 3) {
        ds3[item.type] ? ds3[item.type]++ : ds3[item.type] = 1
        ds3[item.category] ? ds3[item.category]++ : ds3[item.category] = 1
        ds3['count'] ? ds3['count'] += item.count : ds3['count'] = item.count
      }
      else if (item.source_id === 4) {
        ds4[item.type] ? ds4[item.type]++ : ds4[item.type] = 1
        ds4[item.category] ? ds4[item.category]++ : ds4[item.category] = 1
        ds4['count'] ? ds4['count'] += item.count : ds4['count'] = item.count
      }
      else if (item.source_id === 5) {
        ds5[item.type] ? ds5[item.type]++ : ds5[item.type] = 1
        ds5[item.category] ? ds5[item.category]++ : ds5[item.category] = 1
        ds5['count'] ? ds5['count'] += item.count : ds5['count'] = item.count
      }
      else if (item.source_id === 6) {
        ds6[item.type] ? ds6[item.type]++ : ds6[item.type] = 1
        ds6[item.category] ? ds6[item.category]++ : ds6[item.category] = 1
        ds6['count'] ? ds6['count'] += item.count : ds6['count'] = item.count
      }
    })
      }  
        
    const data = [ds1, ds2, ds3, ds4, ds5, ds6]


  return (
    <div className="App">
      <Navbar />
      <div className='body-container'>
        <Overview />
        <OverviewData sources = {sources} info={info} />
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} s={6}>
            <DataDistribution sources={sources} info={info} data={data}/>          
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>notifications</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoType data={data} info={info} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CategoryType data={data} info={info} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CoverageChart sources={sources}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TypeCount data={data}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CategoryCount data ={data}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <RecordCount data={data}/>
          </Grid>
        </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
