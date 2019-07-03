import React from 'react'
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Order from '../Order/Order';
import Mixing from '../Mixing/Mixing';
import animalHeart from '../assets/heart.png';
import grape from '../assets/grapes.png';
import water from '../assets/water.png';
import animalEye from '../assets/animalEye.png';
import Box from '../Box';


const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'coral',
    height: '100vh'
  },
  inlineEle: {
    display: 'flex',
    marginLeft: '30%',
    marginRight: '30%',
    '& div': {
      padding: '8px',
      marginLeft: '5px',
      '& img': {
        width: ''
      }

    }
  }
}));
const invent = [
  {
    name: animalHeart,
    quantity: 10
  },
  {
    name: grape,
    quantity: 10
  },
  {
    name: water,
    quantity: 10
  },
  {
    name: animalEye,
    quantity: 20
  }
]
function handleOnDragStart(e) {
  // var dragImg = new Image(110, 110);  

  // dragImg.src = grape;
  // e.dataTransfer.setDragImage(dragImg, 0, 0);
}


export default function Inventory() {
  const classes = useStyles();
  return (
    <div>
      {/* <Container maxWidth="lg" className={classes.container}> */}
      Inventory
      <Box name='Poop'/>
      <div className={classes.inlineEle}>
        {invent.map((item, index) => (
          <Paper key={index}>
            {item.quantity} x <img onDragStart={handleOnDragStart} src={item.name}></img>
          </Paper>          
        ))}
      </div>
      <Order></Order>
      <Mixing></Mixing>
      {/* </Container> */}
    </div>
  )
}
