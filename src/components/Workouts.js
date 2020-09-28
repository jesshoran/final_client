import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player"

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
                    <div key={workout.id} className="workout">
                        <h3>{ workout.name }</h3>
                        <img src={ workout.img } alt="workout"></img>
                        <ReactPlayer url={workout.demo}></ReactPlayer>
                        {/* <p>{workout.focus }</p> */}
                    </div>
                )
            })}
        </div>
    )
}
