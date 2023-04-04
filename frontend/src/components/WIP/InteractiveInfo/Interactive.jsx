import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import BaseInteractive from "./BaseInteractive";
import AnimationWrapper from "../../AnimationWrapper/AnimationWrapper";
import useOpacityGrow from "../../../hooks/Animations/useOpacityGrow";
import useOpacityShrink from "../../../hooks/Animations/useOpacityShrink";
const userStyles = makeStyles((theme) => ({
  container: {
    width: "60%",
    height: "250px",
    border: "2px solid red",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "auto",
    border: '1px solid white',
    justifyContent: "center",
  },
  square: {
    height: "50%",
    width: "50%",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    cursor: 'pointer',
    '&:hover':{
      scale: '1.05',
      border: '1px solid white',
      boxShadow: '2px 2px 5px black, -2px -2px 5px black'
    }
  },
  squareNone: {
    display: "none",
  },
  detailContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  p: {
    width: "80%",
  },
  button: {
    width: "70px",
    height: "50px",
  },
}));

const baseStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    height: "250px",
    width: "250px",
    border: "1px solid red",
    borderRadius: 15,
    backgroundColor: "lightgray",
    display: "flex",
    marginTop: "20px",
  },
  rotate: {
    animation: `$rotate 3s`,
  },
  theone: {
    width: "55%",
    margin: "auto",
    display: "flex",
  },
  para: {
    color: "black",
  },
  flip: {
    transform: "rotate(30deg)",
    cursor: "pointer",
    height: "250px",
    width: "250px",
    border: "1px solid red",
    borderRadius: 15,
    backgroundColor: "blue",
    display: "flex",
    marginTop: "20px",
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotateY(20deg)",
    },
    "100%": {
      transform: "rotateY(180deg)",
    },
  },
}));

export default function InteractiveInfo() {
  const cindy =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hawtcelebs.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbest-from-the-past-cindy-crawford-at-2nd-annual-revlon-s-unforgettable-women-contest-in-new-york-08-02-1990_3.jpg&f=1&nofb=1&ipt=b28db338317b2bcfe59ab51b3c5768992c876528ece1fdb8137a556ce21e27e7&ipo=images";
  const [displayNone, setDisplayNone] = useState(false);
  const [transition, setTransition] = useState(false);
  const [displayDetails, setDisplayDetails] = useState(false);
  const [details, setDetails] = useState("");
  const [flip, setFlip] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [grow, setGrow] = useState(false);
  const classes = userStyles();
  const [opacityGrow, setOpacityGrow, opacityGrowClass] = useOpacityGrow(false);
  const [opacityShrink, setOpacityShrink, opacityClass] =
    useOpacityShrink(false);

  const base = baseStyles();
  const info1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";
  const info2 =
    "hero ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";
  const info3 =
    "keep ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";
  const info4 =
    "steep ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";

  const handleAnimation = () => {};

  const handleDetails = (e) => {
    setTransition("shrink");
    console.log(e.target.title);
    console.log(transition);
    setTimeout(() => {
      setDetails(e.target.title);
    }, 1500);
    setTimeout(() => {
      setDisplayDetails(true);
      setDisplayNone(true);
      setTransition("grow");

    }, 1600);
  };

  const handleBack = () => {
    setTransition("shrink");
    setTimeout(() => {
      setDetails("");
    }, 1200);
    setTimeout(() => {
      setTransition("grow");
      setDisplayNone(false);
      setDisplayDetails(false);
    }, 1600);
  };

  const handleFlip = () => {
    console.log("cindy");
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 3000);

    if (flip === true) {
      setFlip(false);
    } else {
      setFlip(true);
    }
  };

  const data =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam porro ut voluptatibus incidunt quibusdam neque! Consectetur odit quidem possimus voluptatem rerum sit placeat, commodi pariatur delectus tenetur fugiat accusamus?";

  return (
    <>
      <div className={classes.container}>
        <AnimationWrapper
          data="shrink-grow"
          animate={transition}
          className={classes.wrapper}
        >
          <div className={!displayNone ? classes.square : classes.squareNone}>
            <h3 onClick={handleDetails} title={info1}>
              My
            </h3>
          </div>
          <div className={!displayNone ? classes.square : classes.squareNone}>
            <h3 onClick={handleDetails} title={info2}>
              Tits
            </h3>
          </div>
          <div className={!displayNone ? classes.square : classes.squareNone}>
            <h3 onClick={handleDetails} title={info3}>
              Has
            </h3>
          </div>
          <div className={!displayNone ? classes.square : classes.squareNone}>
            <h3 onClick={handleDetails} title={info4}>
              Customer
            </h3>
          </div>
          {displayDetails && (
            <div className={`${classes.detailContainer} ${opacityGrowClass}`}>
              <p className={classes.para}>{details}</p>
              <button onClick={handleBack}>Back</button>
            </div>
          )}
        </AnimationWrapper>
      </div>
      <BaseInteractive
        onClick={handleFlip}
        baseDiv={`${base.card} ${isAnimated && base.rotate}`}
      >
        {!flip && (
          <img
            className={`${base.theone} ${isAnimated && base.rotate}`}
            src={cindy}
            alt=""
          />
        )}
        {flip && (
          <span className={`${base.para} ${isAnimated && base.rotate}`}>
            {data}
          </span>
        )}
      </BaseInteractive>
    </>
  );
}
