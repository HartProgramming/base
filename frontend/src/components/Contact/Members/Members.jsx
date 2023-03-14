import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Member from "./Member";
<<<<<<< HEAD
import { Select } from "@material-ui/core";
=======
import Flexbox from "../../Elements/Layout/Flexbox/Flexbox";
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing(5),
<<<<<<< HEAD
    backgroundColor: "white",
    flexDirection: "column",
=======
    backgroundColor: theme.palette.background.light,
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
  },
  container: {
    display: "flex",
    maxWidth: 860,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.light,
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
<<<<<<< HEAD
  const [members, setMembers] = useState([]);
  const [def, setDef] = useState("layout-1");

  useEffect(() => {
    setMembers(membersData);
  }, []);
=======
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

  const handleChange = (e) => {
    setDef(e.target.value);
  };

  return (
    <div className={classes.root}>
      {membersData ? (
        <Flexbox className={classes.container}>
          <div xs={12} sm={12}>
            <Typography
              variant="h2"
              className={classes.sectionTitle}
              style={{ width: "100%" }}
            >
              Company Management
            </Typography>
<<<<<<< HEAD
            <Select value={def} onChange={handleChange}>
              <option value="layout-1">Layout 1</option>
              <option value="layout-2">Layout 2</option>
              <option value="layout-3">Layout 3</option>
            </Select>
          </Grid>

          {members.map((member) => (
            <Grid>
              <Member layout={def} member={member} />
            </Grid>
=======
          </div>
          {membersData.map((member) => (
            <Member member={member} />
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
          ))}
        </Flexbox>
      ) : null}
    </div>
  );
};

export default Members;
