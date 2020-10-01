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


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Workouts (props) {
    const [workouts, setWorkouts] = useState([])

  const getWorkouts = async () => {
    try {
      const response = await fetch('http://localhost:3000/workouts')
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
            <h1>Workouts</h1>
            {workouts.map( workout => {
                return  (
                    <Grid container>
                        <Grid item xs={12} s={6} m={4}>
                    <Card key={workout.id} className="workout"
                    item xs={12}>
                        <CardContent>
                       
                            <h3>{ workout.name }</h3>
                        <Link to ={`/workouts/${workout.id}`}> <button className="workout-button"><p>{workout.name}</p></button></Link> 
                        {/* <img src={ workout.img } alt="workout"></img>
                        <ReactPlayer url={workout.demo}></ReactPlayer> */}
                        {/* <p>{workout.focus }</p> */}
                        </CardContent>
                        </Card>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}
