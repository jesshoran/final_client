import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles';

function WorkoutShow (props) {

  const params = useParams()

  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/workouts/${params.id}`);
      setWorkout(response.data);
    }
    fetchData();
  }, []);


  const { name, impact, fitness_type, focus, img, demo, muscles_worked} = workout;

  return (
<html classname="empty-gym">
      <body className = "empty-gym">

      
    <div className="show-container" style={{
      position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      }} >
    <div className="workout">
    <h1>{name}</h1>
    <h3 style={{color: 'blue'}}>Muscles Worked: {muscles_worked}</h3>
    <h4>Impact: {impact}</h4>
    <h4>Fitness Component: {fitness_type}</h4>
    <h4>Focus: {focus}</h4>
      {/* <img src={img} alt={name} className="workout-image" /> */}
      <ReactPlayer style={{margin: 20}}
      url={demo}></ReactPlayer>
    </div>
    </div>
    </body>
    </html>
  );
}

export default WorkoutShow;