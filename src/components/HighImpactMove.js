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


function HighImpactMove (props) {
        
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
            {props.workouts?.map( workout => {
                return  (
                    <div key={workout.id} className="workout">
                        <h3>{ workout.name }</h3>
                        <h3> {workout.reps} </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default HighImpactMove;