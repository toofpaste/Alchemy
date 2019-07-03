import React from 'react'
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Order from '../Order/Order';
import Mixing from '../Mixing/Mixing';

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
        marginLeft: '5px'
    }
  }
}));
const invent =[
  {
    name: 'Animal_Heart',
    quantity: 10
  },
  {
    name: 'Grape',
    quantity: 10
  },
  {
    name: 'Water',
    quantity: 10
  },
  {
    name: 'Animal_Eye',
    quantity: 20
  }
]


export default function Inventory() {
  const classes = useStyles();
  return (
    <div>
      {/* <Container maxWidth="lg" className={classes.container}> */}
      Inventory   
      <div className = {classes.inlineEle}>
      {invent.map((item, index) => (
        <Paper>
                    {item.quantity} x {item.name}
        </Paper>
      ))}  
      </div>
        <Order></Order>
        <Mixing></Mixing>
      {/* </Container> */}
    </div>
  )
}
