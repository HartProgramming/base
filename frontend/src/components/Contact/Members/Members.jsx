import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Member from "./Member";
import { Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    backgroundColor: "white",
  },
  container: {
    display: "flex",
    maxWidth: 860,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20,
  },
  sectionTitle: {
    marginBottom: theme.spacing(3),
    borderBottom: "1px solid black",
    paddingBottom: theme.spacing(1),
    color: "black",
  },
}));

const Members = ({ membersData }) => {
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const [def, setDef] = useState('layout-1')

  useEffect(() => {
    setMembers(membersData);
  }, []);

  const handleChange = (e) => {
    setDef(e.target.value)
  }

  return (
    <div className={classes.root}>
      <Select value={def} onChange={handleChange}>
        <option value="layout-1"></option>
        <option value="layout-2"></option>
        <option value="layout-3"></option>
      </Select>
      {members ? (
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h2" className={classes.sectionTitle}>
              Company Management
            </Typography>
          </Grid>
          {members.map((member) => (
            <Grid>
              <Member layout={def} member={member} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};

export default Members;
