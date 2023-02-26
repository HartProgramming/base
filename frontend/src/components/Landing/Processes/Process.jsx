import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import LockIcon from "@material-ui/icons/Lock";
import DesignIcon from "@material-ui/icons/Brush";
import DevelopIcon from "@material-ui/icons/Code";
import HostingIcon from "@material-ui/icons/Public";
import LaunchIcon from "@material-ui/icons/Launch";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import ProcessEdit from "./ProcessEdit";
import { SlideIntoViewPort } from "../../Elements/Animations/IntoView/SlideIntoViewPort/SlideIntoViewPort";
import EditButton from "../../Elements/Buttons/EditButton";
import Icon from "../../Elements/Icon/Icon";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import { ProcessStylesCenter, ProcessStylesLeft } from "./ProcessStyles";
export default function Process({ step }) {
  let classes;
  const [design, setDesign] = useState(2)
  const [featureData, setFeatureData] = useState(step);
  const [editing, setEditing] = useState(false);
  const auth = useSelector((state) => state.auth);

  const updateProcess = (updateProcess) => {
    setFeatureData(updateProcess);
    setEditing(false);
  };

  if(design === 1){
    classes = ProcessStylesCenter();
  }else{
    classes = ProcessStylesLeft();
  }

  return (
    <>
    {design === 1 && (
      <SlideIntoViewPort direction="down" className={classes.fadeIn}>
        <Grid container spacing={1} className={classes.stepContainer}>
          {!editing ? (
            <>
              <Grid className={classes.iconContainer} item xs={12}>
                <Icon icon={featureData.icon} className={classes.icon} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.heading}>
                  {featureData.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.description}>
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
    )}
    {design === 2 &&(
      <SlideIntoViewPort direction="down" className={classes.fadeIn}>
      <Grid container spacing={1} className={classes.stepContainer}>
        {!editing ? (
          <>
            <Grid className={classes.iconContainer} item xs={12}>
              <Icon icon={featureData.icon} className={classes.icon} />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.heading}>
                {featureData.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={classes.description}>
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
    )}
    </>
  );
}
