import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  stateDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    padding: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSizw: "32px",
    },
  },
}));

export default function AlertResult(props) {
  const { isResultAlert,NoOfCorrectAnswer,noOfUseFiftyFity,noOfUseHint } = props;
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={isResultAlert}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2 className={classes.heading}>Congralation done</h2>
        <DialogTitle id="alert-dialog-title">Your score : { Math.round(NoOfCorrectAnswer*100/15) } </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={classes.stateDetails}>
              <p>Numbers of correct answer</p>
              <p> {NoOfCorrectAnswer}</p>
            </div>
            <div className={classes.stateDetails}>
              <p>used Hints</p>
              <p> {noOfUseHint}</p>
            </div>
            <div className={classes.stateDetails}>
              <p>used FiftyFity</p>
              <p> {noOfUseFiftyFity}</p>
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button  color="primary" href='/play' >
            Disagree
          </Button>
          <Button  color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
