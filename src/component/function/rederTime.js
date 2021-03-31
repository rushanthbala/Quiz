import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    timer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       padding: '30px',
    },
    value:{
        fontSize: '20px',
        padding:'30px'
    }
  });
const RenderTime = ({ remainingTime }) => {
   
      const classes = useStyles();

    if (remainingTime === 0) {
      return <div className={classes.timer}>Too lale...</div>;
    }
  
    return (
      <div className={classes.timer}>
        <div className={classes.text}>Remaining</div>
        <div className={classes.value}>{remainingTime}</div>
        <div className={classes.text}>seconds</div>
      </div>
    );
  };
export default RenderTime