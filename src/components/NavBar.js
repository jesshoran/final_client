import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    let navBarItems = [
        <li key={1}>
            <Link to="/">Home</Link>
        </li>,
        <li key={2}>
            <Link to="/workouts">Learn</Link>
        </li>,
        <li key={3}>
            <Link to="/generator">Work</Link>
        </li>]
    

  
    return (
      <>
        <nav>
           <ul>{navBarItems}</ul>
          
        </nav>
      </>
    );
  }
  
  export default NavBar;
  