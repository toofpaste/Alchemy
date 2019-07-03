import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useDrag } from 'react-dnd'

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


export default function Item({ isDragging, element }) {
  const classes = useStyles();

  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'element', element },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })
  return (
    <div ref={dragRef} style={{ opacity }}>
      <Paper>
        {element.quantity} x <img src={element.name}></img>
      </Paper>
    </div>
  )


  // return (
  //   <div>
  //     <Box name='Poop' />
  //     <Paper>
  //       {item.quantity} x <img src={item.name}></img>
  //     </Paper>
  //   </div>
  // )
}
