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
import HighImpactMove from './HighImpactMove.js';
// import Timer from './Timer.js'

function HighImpact (props) {
    const [workouts, setWorkouts] = useState([])
  const getWorkouts = async () => {
    try {
      const response = await fetch('http://localhost:3000/high_impact')
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
       <div>
         <h1>15 minute High Impact HIIT Workout</h1>
         <h3 style={{textAlign: 'center'}}>Here's your personally generated workout, time to crush it!</h3>
         {/* <Timer/> */}
         <Grid container>
                 <Grid 
                   container
                    item m={3}>
                        <HighImpactMove workouts={workouts.group_one}/>
                </Grid>
              </Grid>
        <div>
        <HighImpactMove workouts={workouts.group_two}/>
    </div>
    <div>
        <HighImpactMove workouts={workouts.group_three}/>
    </div>
    </div>
    )
}
export default HighImpact;