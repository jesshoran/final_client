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


export default function Workouts (props) {
    
    
    const [workouts, setWorkouts] = useState([])
  const getWorkouts = async () => {
    try {
      const response = await fetch('https://crush-hiit-api.herokuapp.com/workouts')
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
            <Card key={workout.id} 
            style={{margin: 20, textAlign: 'center'}}
            className="moves">
              <CardActionArea>
                <CardHeader
                    title={workout.name}
                    subheader={workout.muscles_worked}>
                    </CardHeader>           
                 <CardMedia
                    style = {{ height: 300, width: 300 }}
                    image={ workout.img }
                    title="workout"
                    />
              </CardActionArea>
              <CardActions>
                  <Button style= {{margin: 'auto'}} size="medium" href={`/workouts/${workout.id}`} variant="outlined">Learn More</Button>
              </CardActions>
            </Card>  
            );
        });
        return (
  
          <div className="workouts">
            <div>
                <h1 style={{color: 'black'}}>Bodyweight Move Library</h1>
                <Button size="medium" variant="contained" color="primary" href="/add" variant="outlined">Add a Workout!</Button>
                <Grid container
                spacing={2}>
                 <Grid 
                   container
                    item xs={12} s={6} m={2}
                    justify="center">
                        {showWorkouts}
                </Grid>
                </Grid>
        </div>
      

        </div>

    );
};