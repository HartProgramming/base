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
import {Select} from "@material-ui/core";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import { ProcessStylesCenter, ProcessStylesLeft } from "./ProcessStyles";
import { useEffect } from "react";
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
