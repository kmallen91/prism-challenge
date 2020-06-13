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
    
                   

  return (
    <div className="App">
      <Navbar />
      <Overview />
      <OverviewData sources = {sources} info={info} />
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8} s={6}>
          <DataDistribution sources={sources} info={info} />          
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>notifications</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>type ring graph</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>category ring graph</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>inspection coverage horizontal</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>count types horizontal</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>count categories horizontal</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>record count</Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;
