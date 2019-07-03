import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vialImg from '../assets/empty_vial.png';
import background from '../assets/background.png';
const useStyles = makeStyles(theme => ({
    container: {
      backgroundImage: `url(${background})`,
      backgroundPositionX: 'center',
      backgroundPositionY: 'bottom',
      alignItems: 'flex-end',
      justifyContent: 'center',      
      display: 'flex',
      height: '80vh',
      width: '40vw',
      marginLeft: 'auto',
      marginRight: 'auto',      
      '& img': {        
        height: '400px',
        marginBottom: '130px'  
      }
    
    }
  }));

export default function Mixing() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
           <img src={vialImg} alt="Logo"></img>
        </div>
    )
}
