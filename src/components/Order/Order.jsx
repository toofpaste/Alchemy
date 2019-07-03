import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    container: {
      backgroundColor: 'grey',
    //   float: 'right',
      color: 'white',
      padding: '5px',
      marginTop: '-50px'
    
    }
  }));

export default function Order() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p>Current Order: 10x Health Potions</p>
        </div>
    )
}
