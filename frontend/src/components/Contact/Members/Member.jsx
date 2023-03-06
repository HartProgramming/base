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
import { useEffect } from "react";
const Member = ({ member, layout }) => {
  const layout1 = MemberStyles1();
  const layout2 = MemberStyles2();
  const layout3 = MemberStyles3();
  const { fadeIn } = baseClasses();
  const [editing, setEditing] = useState(false);
  const [memberData, setMemberData] = useState(member);
  const [design, setDesign] = useState(2);
  const [align, setAlign] = useState(layout1);
  const auth = useSelector((state) => state.auth);

  console.log(layout);

  const updateMember = (updateMember) => {
    setMemberData(updateMember);
    setEditing(false);
  };

  useEffect(() => {
    if (layout === "layout-1") {
      setAlign(layout1);
      setDesign(1)
    } else if (layout === "layout-2") {
      setAlign(layout2);
      setDesign(2)
    } else if (layout === "layout-3") {
      setAlign(layout3);
      setDesign(3)
    }
  }, [layout]);

  return (
    <>
      {design === 1 && (
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          key={memberData.name}
          className={`${align.container}`}
        >
          {!editing ? (
            <Card className={`${align.card} ${fadeIn}`}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="rounded"
                    src={memberData.image}
                    className={align.avatar}
                  />
                }
                title={memberData.name}
                subheader={memberData.role}
                classes={{
                  title: align.title,
                  subheader: align.subheader,
                }}
              />
              <div className={align.socialIcons}>
                <IconButton
                  className={align.iconButton}
                  href={member.linkedIn}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  className={align.iconButton}
                  href={member.github}
                  target="_blank"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  className={align.iconButton}
                  href={member.twitter}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
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
      {design === 2 && (
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          key={memberData.name}
          className={`${align.container}`}
        >
          {!editing ? (
            <Card className={`${align.card} ${fadeIn}`}>
              <MemberContent member={memberData} />
              <div className={align.avatarContainer}>
                <CardHeader
                  avatar={
                    <Avatar
                      variant="rounded"
                      src={memberData.image}
                      className={align.avatar}
                    />
                  }
                  title={memberData.name}
                  subheader={memberData.role}
                  classes={{
                    title: align.title,
                    subheader: align.subheader,
                  }}
                />
              </div>
              <div className={align.socialIcons}>
                <IconButton
                  className={align.iconButton}
                  href={member.linkedIn}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  className={align.iconButton}
                  href={member.github}
                  target="_blank"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  className={align.iconButton}
                  href={member.twitter}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
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
          className={`${align.container}`}
        >
          {!editing ? (
            <Card className={`${align.card} ${fadeIn}`}>
              <div className={align.avatarContainer}>
                <CardHeader
                  avatar={
                    <Avatar
                      variant="rounded"
                      src={memberData.image}
                      className={align.avatar}
                    />
                  }
                  title={memberData.name}
                  subheader={memberData.role}
                  classes={{
                    title: align.title,
                    subheader: align.subheader,
                    root: align.avatarContainer,
                  }}
                />
                <div className={align.socialIcons}>
                  <IconButton
                    className={align.iconButton}
                    href={member.linkedIn}
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    className={align.iconButton}
                    href={member.github}
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    className={align.iconButton}
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
