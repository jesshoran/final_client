import React, { useState, useEffect } from "react";
// import { Splide, SplideSlide } from '@splidejs/react-splide'
import Workout from './components/Workouts.js'
// import ReactPlayer from "react-player"
// import Video from '@splidejs/splide-extension-video';


function App() {

  // const [counter, changeCounter] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      changeCounter(counter + 1);
    }, 1000);
 
    return () => clearInterval(interval);
  }, [counter]); ///<--- this right here
 
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <Workout/>
    </div>
  );
}

export default App;
