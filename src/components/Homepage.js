import React from "react";
import NavBar from "./NavBar";
import ReactPlayer from "react-player"

function Homepage(props) {
    return (
      <div>
        <h1>Welcome to the Homepage</h1>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=qeGNlZnD46w'
          width='100%'
          height='100%'
        />
      </div>
      </div>
    );
  }
  
  export default Homepage;
  