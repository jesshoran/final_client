import React from 'react';
import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: 650,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalBody (props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
    return (
        <div  style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Here's How It's Done</h2>
          <ReactPlayer url={props.demo} ></ReactPlayer>
        
        </div>
      );
}

export default ModalBody;