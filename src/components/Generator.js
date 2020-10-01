import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player"
import Button from '@material-ui/core/Button';

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
            <Button variant="contained" color="primary">High Impact</Button>
            <button>Mixed Impact</button>
            <button>Low Impact</button>
        </div>
    )
}
