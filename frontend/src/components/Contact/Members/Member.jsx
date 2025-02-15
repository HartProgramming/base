import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { useState } from "react";
import { useSelector } from "react-redux";
import MemberEdit from "./MemberEdit";
import MemberContent from "./MemberContent";
import { baseClasses } from "../../../classes";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import Flexbox from "../../Elements/Layout/Flexbox/Flexbox";
import AnimationWrapper from "../../AnimationWrapper/AnimationWrapper";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 860,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.light,
    margin: theme.spacing(2, 2, 2, 2),
  },
  card: {
    backgroundColor: theme.palette.background.light,
    maxWidth: 350,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: theme.shadows[7],
    },
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  title: {
    color: "black",
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: 5,
  },
  subheader: {
    color: theme.palette.primary.dark,
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
}));

const Member = ({ member, editMode = false, newImage }) => {
  const classes = useStyles();
  const { fadeIn } = baseClasses();
  const [editing, setEditing] = useState(false);
  const [memberData, setMemberData] = useState(member);
  const auth = useSelector((state) => state.auth);
  const [animated, setAnimated] = useState();
  const [ghost, setGhost] = useState(false);

  useEffect(() => {
    setMemberData(member);
  }, [member]);

  const updateMember = (updateMember) => {
    setMemberData(updateMember);
    setEditing(false);
  };

  const handleClick = () => {
    console.log("hi");
    setGhost(true);
    console.log(ghost);
    setAnimated("shrink-grow");
    console.log(animated);
  };

  return (
    <>
      <Flexbox key={memberData.name} className={classes.container}>
        <div xs={12} md={12} key={memberData.name}>
          {!editing ? (
            <Card onClick={handleClick} className={`${classes.card} ${fadeIn}`}>
              <AnimationWrapper
                className={classes.card}
                animate="shrink"
                data={animated}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      variant="rounded"
                      src={newImage ? newImage : memberData.image}
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
                <MemberContent trans={ghost} member={memberData} />
              </AnimationWrapper>

              {!editing && editMode ? (
                <div style={{ marginTop: 4, marginBottom: 4, marginRight: 8 }}>
                  <EditDeleteButtonMenu
                    hideDelete
                    editClick={() => setEditing(!editing)}
                    position="flex-end"
                    placement="bottom"
                    text="Member"
                    obj={member.id}
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
        </div>
      </Flexbox>
    </>
  );
};

export default Member;
