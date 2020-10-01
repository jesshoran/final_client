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
import { Typography } from '@material-ui/core';


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

    const showWorkouts = workouts.map( workout => {
        return  (
           
            <Card key={workout.id} 
            className="moves">
                <CardActionArea>
                <CardContent>
                    <Typography>{ workout.name }</Typography>
                <Link to ={`/workouts/${workout.id}`}> <Button className="workout-button"><p>{workout.name}</p></Button></Link>
                </CardContent>
                 <CardMedia
                    style = {{ height: 200, width: 300 }}
                    image={ workout.img }
                    title="workout"
                    />
                </CardActionArea>
            </Card>  
            );
        });
        return (
            <div>
                <h1>Bodyweight Move Library</h1>
                <Grid
                    container
                    spacing={8}
s                    justify="center"
                    >
                 <Grid 
                    container
                    spacing={1}
                    item xs={12}>
                        {showWorkouts}
                </Grid>
            </Grid>
        </div>
    );
};