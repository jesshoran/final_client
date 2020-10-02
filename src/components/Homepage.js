import React from "react";
import NavBar from "./NavBar";
import ReactPlayer from "react-player"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
  container: {

  }
}));

function Homepage() {
  const classes = useStyles();
    return (
      <Container className="classes.container">
        <video id="myVideo" className='videoTag' autoPlay loop muted>
        <source src="./video/Test.mp4" type='video/mp4' />
        </video>
        <div class="content">
        <h1>Crush HIIT</h1>
        <Button variant="outlined" color="white">Learn</Button>
        <Button variant="outlined" >Work</Button>
        
      </div>

      </Container>
    );
  }
  
  export default Homepage;
  