import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import ProcessEdit from "./ProcessEdit";
import { SlideIntoViewPort } from "../../Elements/Animations/IntoView/SlideIntoViewPort/SlideIntoViewPort";
import EditButton from "../../Elements/Buttons/EditButton";
import Icon from "../../Elements/Icon/Icon";
import {Select} from "@material-ui/core";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
<<<<<<< HEAD
import { ProcessStylesCenter, ProcessStylesLeft } from "./ProcessStyles";
import { useEffect } from "react";
=======

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    textAlign: "center",
  },
  icon: {
    fontSize: "2rem",
    color: theme.palette.secondary.main,
  },
  heading: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1.5rem",
    border: 0,
  },
  description: {
    fontSize: "0.95rem",
    fontWeight: 400,
    fontFamily: "Roboto",
    textAlign: "center",
    color: theme.palette.text.dark,
    minHeight: 80,
  },
  stepContainer: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 550,
  },
  fadeIn: {
    opacity: 0,
    animation: `$fadeIn 0.5s ease-in-out forwards`,
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(-30px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
export default function Process({ step }) {
  const center = ProcessStylesCenter()
  const left = ProcessStylesLeft()
  const [align, setAlign] = useState(center)
  const [featureData, setFeatureData] = useState(step);
  const [editing, setEditing] = useState(false);
  const [def, setDef] = useState('center-align')
  const auth = useSelector((state) => state.auth);

  const updateProcess = (updateProcess) => {
    setFeatureData(updateProcess);
    setEditing(false);
  };


  const handleChange = (e) => {
      console.log(e.target.value)
      setDef(e.target.value)
  }

  useEffect(() => {
    if(def === 'center-align'){
    setAlign(center)
    }else if(def === 'left-align'){
      setAlign(left)
    }
  }, [def])

  return (
    <>
      <SlideIntoViewPort direction="down" className={align.fadeIn}>
        <Select value={def} onChange={handleChange}>
          <option value={'left-align'}>Left</option>
          <option value={'center-align'}>Center</option>
        </Select>
        <Grid container spacing={1} className={align.stepContainer}>
          {!editing ? (
            <>
              <Grid className={align.iconContainer} item xs={12}>
                <Icon icon={featureData.icon} className={`${align.icon}`} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={align.heading}>
                  {featureData.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" className={align.description}>
                  {featureData.description}
                </Typography>
              </Grid>
              {!editing && auth.is_superuser ? (
                <div style={{ width: "95%" }}>
                  <EditDeleteButtonMenu
                    editClick={() => setEditing(!editing)}
                    hideDelete
                    position="end"
                  />
                </div>
              ) : null}
            </>
          ) : (
            <ProcessEdit
              process={featureData}
              updateProcess={updateProcess}
              handleCancel={() => setEditing(!editing)}
            />
          )}
        </Grid>
      </SlideIntoViewPort>
    
    </>
  );
}
