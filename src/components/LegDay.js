import React, { useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CardHeader, Typography } from '@material-ui/core';
import LegDayMove from './HighImpactMove.js';
import DemoModal from './DemoModal.js'


export default function Workouts (props) {
    
    
  const [workouts, setWorkouts] = useState([])
const getWorkouts = async () => {
  try {
    const response = await fetch('https://crush-hiit-api.herokuapp.com/leg_day')
    const data = await response.json()
    console.log(data)
    setWorkouts(data)
   } catch(error){
     console.error(error)
   }
 } 
  useEffect(
    ()=>{
      (
        async function (){
        await getWorkouts()
       }
     )()
   },[])

  const showWorkouts = workouts.map( workout  => {
      return  (
          <Card key={workout.id} style={{width: 400, margin: 25, textAlign: 'center'}}className="workout">
          <CardActionArea>
          <CardHeader
          title={ workout.name }></CardHeader>
          <CardContent> {workout.reps} </CardContent>
          <CardMedia
         style = {{ height: 300, width: 300, margin: 'auto' }}
          image={ workout.img }
          title="workout"
      />
      <DemoModal demo={workout.demo}/>
          </CardActionArea>
      </Card>
          );
      });
      return (

        <div className="workouts">
          <div>
              <h1 style={{color: 'black'}}>Leg Day Workout!</h1>
              <h3 style={{textAlign: 'center', color: 'black'}}>It's LEG DAY! Complete 3 rounds of the below exercises!</h3>
              <div className="hiit-sesh">
              <Grid container
              spacing={5}>
               <Grid 
                 container
                  item l={4}
                  justify="center">
                      {showWorkouts}
              </Grid>
              </Grid>
              </div>
      </div>
  
      </div>

  );
};