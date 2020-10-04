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
      <html classname="empty-gym">
      <body className="empty-gym">
        <div >
            <h1>Custom Workouts</h1>
            <h2 style={{color: 'white'}}>You tell us what you're looking for and we'll do the rest!
            </h2>
            <div className="work-container">
            <div>
            <h3 style={{color: 'black'}}>15 Minute HIIT (High Intensity Interval Training). Just Hitplay and get to work!</h3>
            <Link to ="/high_impact"> <Button variant="contained" color="primary"><p>High Impact</p></Button></Link>
            </div>
            <div>
            <h3 style={{color: 'black'}}>Low Impact Workout, don't worry it'll still be tough!</h3>  
            <Link to ="/low_impact"> <Button variant="contained" color="primary"side ="medium"><p>Low Impact</p></Button></Link>
            </div>
            <div>
            <h3 style={{color: 'black'}}>Leg Day: Just what it sounds like, all legs all day!</h3>  
            <Link to ="/leg_day"> <Button variant="contained" color="primary"side ="medium"><p>Leg Day</p></Button></Link>
            </div>
            <div>
            <h3 style={{color: 'black'}}>Core Blast: 10 moves that'll surely make you sore tomorrow!</h3>  
            <Link to ="/core_blast"> <Button variant="contained" color="primary"side ="medium"><p>Core Blast</p></Button></Link>
            </div>
            <div>
            <h3 style={{color: 'black'}}>Surprise Me: Feeling daring? Try the surprise me and see what we throw at you!</h3>  
            <Link to ="/surprise_me"> <Button variant="contained" color="primary"side ="medium"><p>Surprise Me</p></Button></Link>
            </div>
            </div>
        </div>
        </body>
        </html>
    )
}
