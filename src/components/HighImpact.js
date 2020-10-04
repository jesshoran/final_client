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
      const response = await fetch('https://crush-hiit-api.herokuapp.com/high_impact')
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
         <h1 style={{color: 'black'}}>15 minute High Impact HIIT Workout</h1>
         <h3 style={{textAlign: 'center', color: 'black'}}>Here's your personally generated workout, time to crush it!</h3>
         {/* <Timer/> */}
    
                 <div className="hiit-sesh">
                   <h3>Do these 3 rounds of these 3 exercises</h3>
                        <HighImpactMove workouts={workouts.group_one}/>
              </div>
        <div className="hiit-sesh">
        <h3>Do these 3 rounds of these 3 exercises</h3>
        <HighImpactMove workouts={workouts.group_two}/>
    </div>
    <div className="hiit-sesh">
    <h3>Do these 3 rounds of these 3 exercises</h3>
        <HighImpactMove workouts={workouts.group_three}/>
    </div>
    <h1 style={{color: 'black'}}>YOU'RE DONE!</h1>
    </div>
    )
}
export default HighImpact;