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
    <div className="show-container">
    <div className="workout">
    <h1>{name}</h1>
    <h3>Muscles Worked: {muscles_worked}</h3>
      {/* <img src={img} alt={name} className="workout-image" /> */}
      <ReactPlayer style={{margin: 70}} url={demo}></ReactPlayer>
    </div>
    </div>
  );
}

export default WorkoutShow;