import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AddWorkout () {
    const [workouts, setWorkouts] = useState([])
    const [formInputs, updateFormInputs] = useState({
        name: '',
        impact: '',
        fitness_type: '',
        focus: '',
        img: '',
        demo: ''  
      })
    
         const handleChange = (event) => {
          const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
          updateFormInputs(updatedFormInputs);
        }
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              'https://crush-hiit-api.herokuapp.com/workouts',
              formInputs
            );
            const createdWorkout = response.data
            await updateFormInputs({
                name: '',
                impact: '',
                fitness_type: '',
                focus: '',
                img: '',
                demo: ''
            })
            await setWorkouts([createdWorkout, ...workouts])
          }catch(error){
            console.error(error)
          }
        }
       
        return (
          <body className="empty-gym">
          <div className="add">
          
        <h1 style={{color: 'black'}}>Add a Move </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name" value={formInputs.name}
            onChange={handleChange}
          />
          <label htmlFor="impact">Impact: </label>
          <input
            type="text"
            id="impact" value={formInputs.date}
            onChange={handleChange}>
            </input>
          
          <label htmlFor="fitness_type">Endurance, Strength or Power: </label>
          <input
            type="text"
            id="fitness_type" value={formInputs.memory}
            onChange={handleChange}
          />
          <label htmlFor="muscles_worked">Muscles Worked: </label>
          <input
            type="text"
            id="muscles_worked" value={formInputs.memory}
            onChange={handleChange}
          />
            <label htmlFor="focus">Focus: </label>
          <input
            type="text"
            id="focus" value={formInputs.memory}
            onChange={handleChange}
          />
           <label htmlFor="img">Image: </label>
          <input
            type="text"
            id="img" value={formInputs.memory}
            onChange={handleChange}
          />
           <label htmlFor="demo">Demo: </label>
          <input
            type="text"
            id="demo" value={formInputs.memory}
            onChange={handleChange}
          />
    
          <input type="submit" className="submit" />
        </form>
    
 
      </div>
      </body>
      );
    }
    
    