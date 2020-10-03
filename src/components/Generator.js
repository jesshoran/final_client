import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default function Generator (props) {
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

     //on click, display 10 high impact workouts

    return (
        <div>
            <h1>Generate a custom Workout!</h1>
            <h2>What type of Workout are you feeling today?</h2>
            <Link to ="/high_impact"> <Button variant="contained" color="primary"><p>High Impact</p></Button></Link>
            <Link to ="/low_impact"> <Button variant="contained" color="primary"><p>Low Impact</p></Button></Link>
            <Button>Low Impact</Button>
            <Button>Core Blast</Button>
            <Button>Surprise Me!</Button>
        </div>
    )
}
