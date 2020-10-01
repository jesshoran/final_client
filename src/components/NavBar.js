import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    let navBarItems = [
        <li key={1}>
            <Link to="/">Home</Link>
        </li>,
        <li key={2}>
            <Link to="/workouts">Workouts</Link>
        </li>,
        <li key={3}>
        <Link to="/add">Add</Link>
         </li>,
        <li key={4}>
            <Link to="/generator">Generator</Link>
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
  