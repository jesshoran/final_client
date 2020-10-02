import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player"


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


  const { name, impact, fitness_type, focus, img, demo} = workout;

  return (
    <div className="move-page">
    <div className="workout">
    <h1>{name}</h1>
      <img src={img} alt={name} className="workout-image" />
      <ReactPlayer url={demo}></ReactPlayer>
    </div>
    </div>
  );
}

export default WorkoutShow;