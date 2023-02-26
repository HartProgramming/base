import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { MemberContentStyles1, MemberContentStyles2, MemberContentStyles3 } from "./MemberContentStyles";


const MemberContent = ({ member }) => {
  let classes;
  const [design, setDesign] = useState(3);

  if(design === 1){
    classes = MemberContentStyles1();
  }else if(design === 2){
    classes = MemberContentStyles2();
  }else if(design === 3){
    classes = MemberContentStyles3();
  }

  return (
    <>
      {design === 1 && (
        <CardContent className={classes.cardContent}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.body}
          >
            {member.bio}
          </Typography>
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
        </CardContent>
      )}
      {design === 2 && (
        <CardContent className={classes.cardContent}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.body}
          >
            {member.bio}
          </Typography>
        </CardContent>
      )}
      {design === 3 && (
        <CardContent className={classes.cardContent}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.body}
          >
            {member.bio}
          </Typography>
        </CardContent>
      )}
    </>
  );
};

export default MemberContent;
