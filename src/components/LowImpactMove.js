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
import DemoModal from './DemoModal.js';


function LowImpactMove (props) {
        
const [workouts, setWorkouts] = useState([])
  const getWorkouts = async () => {
    try {
      const response = await fetch('https://crush-hiit-api.herokuapp.com/low_impact')
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

     return (
      <Grid container>
          {props.workouts?.map( workout => {
              return  (
                  <Card key={workout.id} style={{margin: 'auto', width: 400, textAlign: 'center'}}className="workout">
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
              )
          })}
      </Grid>
  )
}

export default LowImpactMove;