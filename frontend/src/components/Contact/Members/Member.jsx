import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { useState } from "react";
import { useSelector } from "react-redux";
import MemberEdit from "./MemberEdit";
import MemberContent from "./MemberContent";
import { baseClasses } from "../../../classes";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import { MemberStyles1, MemberStyles2, MemberStyles3 } from "./MemberStyles";
import { IconButton } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
const Member = ({ member }) => {
  let classes;
  const { fadeIn } = baseClasses();
  const [editing, setEditing] = useState(false);
  const [memberData, setMemberData] = useState(member);
  const [design, setDesign] = useState(3);
  const auth = useSelector((state) => state.auth);

  const updateMember = (updateMember) => {
    setMemberData(updateMember);
    setEditing(false);
  };

  if (design === 1) {
    classes = MemberStyles1();
  } else if (design === 2) {
    classes = MemberStyles2();
  } else if (design === 3) {
    classes = MemberStyles3();
  }

  return (
    <>
      {design === 1 && (
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          key={memberData.name}
          className={`${classes.container}`}
        >
          {!editing ? (
            <Card className={`${classes.card} ${fadeIn}`}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="rounded"
                    src={memberData.image}
                    className={classes.avatar}
                  />
                }
                title={memberData.name}
                subheader={memberData.role}
                classes={{
                  title: classes.title,
                  subheader: classes.subheader,
                }}
              />
              <MemberContent member={memberData} />
              {!editing && auth.is_superuser ? (
                <div style={{ marginTop: 4, marginBottom: 4, marginRight: 8 }}>
                  <EditDeleteButtonMenu
                    hideDelete
                    editClick={() => setEditing(!editing)}
                    position="flex-end"
                    placement="bottom"
                  />
                </div>
              ) : null}
            </Card>
          ) : (
            <MemberEdit
              member={memberData}
              onUpdate={updateMember}
              handleCancel={() => setEditing(!editing)}
            />
          )}
        </Grid>
      )}
      {design === 2 && (
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          key={memberData.name}
          className={`${classes.container}`}
        >
          {!editing ? (
            <Card className={`${classes.card} ${fadeIn}`}>
              <MemberContent member={memberData} />
              <div className={classes.avatarContainer}>
                <CardHeader
                  avatar={
                    <Avatar
                      variant="rounded"
                      src={memberData.image}
                      className={classes.avatar}
                    />
                  }
                  title={memberData.name}
                  subheader={memberData.role}
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader,
                  }}
                />
              </div>

              
              {!editing && auth.is_superuser ? (
                <div style={{ marginTop: 4, marginBottom: 4, marginRight: 8 }}>
                  <EditDeleteButtonMenu
                    hideDelete
                    editClick={() => setEditing(!editing)}
                    position="flex-end"
                    placement="bottom"
                  />
                </div>
              ) : null}
            </Card>
          ) : (
            <MemberEdit
              member={memberData}
              onUpdate={updateMember}
              handleCancel={() => setEditing(!editing)}
            />
          )}
        </Grid>
      )}
      {design === 3 && (
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          key={memberData.name}
          className={`${classes.container}`}
        >
          {!editing ? (
            <Card className={`${classes.card} ${fadeIn}`}>
              <div className={classes.avatarContainer}>
                <CardHeader
                  avatar={
                    <Avatar
                      variant="rounded"
                      src={memberData.image}
                      className={classes.avatar}
                    />
                  }
                  title={memberData.name}
                  subheader={memberData.role}
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader,
                    root: classes.avatarContainer
                  }}
                />
                <div className={classes.socialIcons}>
                <IconButton
                  className={classes.iconButton}
                  href={member.linkedIn}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  href={member.github}
                  target="_blank"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  href={member.twitter}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
              </div>
              </div>

              <MemberContent member={memberData} />
              {!editing && auth.is_superuser ? (
                <div style={{ marginTop: 4, marginBottom: 4, marginRight: 8 }}>
                  <EditDeleteButtonMenu
                    hideDelete
                    editClick={() => setEditing(!editing)}
                    position="flex-end"
                    placement="bottom"
                  />
                </div>
              ) : null}
            </Card>
          ) : (
            <MemberEdit
              member={memberData}
              onUpdate={updateMember}
              handleCancel={() => setEditing(!editing)}
            />
          )}
        </Grid>
      )}
    </>
  );
};

export default Member;
