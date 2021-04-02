import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AlertResult from "./resultAlert";

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
const RenderTime = (props) => {
   const { remainingTime,noOfCorrectAnswer,noOfUseFiftyFity,noOfUseHint } = props
      const classes = useStyles();

    if (remainingTime === 0) {
      return( <div>
         <AlertResult
            isResultAlert={true}
            NoOfCorrectAnswer={noOfCorrectAnswer}
            noOfUseFiftyFity={noOfUseFiftyFity}
            noOfUseHint={noOfUseHint}
          />
      </div>);
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