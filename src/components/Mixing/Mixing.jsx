import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vialImg from '../assets/empty_vial.png';
import background from '../assets/background.png';
import Dustbin from '../Dustbin';

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
            marginBottom: '130px',
            background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, ${colorBuilder(colorthing)}, rgba(0,0,0,0) 0px)`
            //60px / 210
        }
    },
    vileBG: {
        backgroundColor: 'green'
    }

}));

const colorthing = [ 
    '#d32f2f',
    '#64B5F6'
]

function colorBuilder(colorItem) {
    let gradiant = ''
    let ratio = 50;
    let scroll = 60;
    colorItem.forEach(element => {
        gradiant += `${element} ${scroll}px,`
        // gradiant += `${element} ${scroll}px,`
        scroll+= ratio;
    });
    gradiant = gradiant.slice(0, gradiant.length - 1);
    return gradiant;
}


export default function Mixing() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Dustbin/>
            <img src={vialImg} alt="Logo" />
            <div className={classes.vileBG}></div>
        </div>
    )
}
