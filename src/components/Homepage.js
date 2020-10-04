import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    borderColor: 'white',
    height: 100,
    width: 150,
    fontSize: 40,
    margin: 10,
  }
}));

function Homepage() {
  const classes = useStyles();
    return (
      <Container className="classes.container">
        <video id="myVideo" className='videoTag' autoPlay loop muted>
        <source src="./video/WithOverlay.mp4" type='video/mp4' />
        </video>
        <div class="content">
        <h1 style={{ position: 'fixed', top: 30, left: 50, fontSize: 60}}>Crush HIIT</h1>
        <div style = {{ position: 'fixed', bottom: 30, right: 50, fontSize: 60}}>
        <Button className= {classes.button}  href="/workouts" variant="outlined" >Learn</Button>
        <Button className= {classes.button} href="/generator" variant="outlined" >Work</Button>
        </div>
        
      </div>

      </Container>
    );
  }
  
  export default Homepage;
  