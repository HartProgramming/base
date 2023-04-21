import React, { useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { border, height, margin, width } from "@mui/system";
import { FaArrowDown, FaArrowUp, FaCuttlefish } from "react-icons/fa";
import {
  IoMdPerson as CustomersIcon,
  IoIosMap as MapIcon,
} from "react-icons/io";
import snackbarReducer from "../../../lib/Reducers/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING, CLOSE_SNACKBAR } from "../../../lib/Actions/snackbar";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    margin: "auto",
    borderRadius: 15,
    width: "40%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "column",
  },
  customer: {
    height: 50,
    width: 50,
  },
  infocontainer: {
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    height: 50,
    display: "flex",
    margin: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  arrow: {
    color: theme.palette.primary.main,
    height: 25,
    width: 25,
    cursor: "pointer",
  },
})); 

const Info = () => {
  const [state, dispatch] = useReducer(snackbarReducer, ALERT_SUCCESS)
  const classes = useStyles();
  const [openDrop, setOpenDrop] = useState(false);
  const handledrop = () => {
    if (openDrop === false) {
dispatch({type: ALERT_INFO, open: true,duration: 1000, message: 'More Info Opened'})
        setOpenDrop(true);
    } else {
      setOpenDrop(false);
      dispatch({type: CLOSE_SNACKBAR, duration: '2000', open: false})
    }
  };

  const handleClose = () => {
    dispatch({type: CLOSE_SNACKBAR,open: false})
  }

  return (
    <>
    {<AdvancedSnackbar onClose={handleClose} duration={state.duration} message={state.message} open={state.open} />}
      <div className={classes.container}>
        <h2>Customer</h2>
        <CustomersIcon className={classes.customer} />
        <div className={classes.infocontainer}>
          <h3>Click for more info</h3>
          {!openDrop && (
            <FaArrowDown onClick={handledrop} className={classes.arrow} />
          )}
          {openDrop && (
            <FaArrowUp onClick={handledrop} className={classes.arrow} />
          )}
        </div>
        {openDrop && (
          <div className={classes.infocontainer}>
            <h2>hi</h2>
          </div>
        )}
        
      </div>
    </>
  );
};

export default Info;
