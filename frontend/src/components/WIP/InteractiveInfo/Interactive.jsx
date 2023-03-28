import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import BaseInteractive from "./BaseInteractive";
const userStyles = makeStyles((theme) => ({
  container: {
    border: "2px solid red",
    width: "60%",
    height: "250px",
    display: "flex",
    flexWrap: "wrap",
  },
  square: {
    width: "50%",
    height: "50%",
    border: "1px solid white",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
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
    animation: `$rotate 3s infinite`
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
      transform: "rotate(20deg)"
    },
    "100%": {
      transform: "rotate(180deg)"
    }

  }
}));


export default function InteractiveInfo() {
  const cindy =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hawtcelebs.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbest-from-the-past-cindy-crawford-at-2nd-annual-revlon-s-unforgettable-women-contest-in-new-york-08-02-1990_3.jpg&f=1&nofb=1&ipt=b28db338317b2bcfe59ab51b3c5768992c876528ece1fdb8137a556ce21e27e7&ipo=images";
  const [displayNone, setDisplayNone] = useState(false);
  const [displayDetails, setDisplayDetails] = useState(false);
  const [details, setDetails] = useState("");
  const [flip, setFlip] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const classes = userStyles();
  const base = baseStyles();
  const info1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";
  const info2 =
    "hero ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";
  const info3 =
    "keep ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";
  const info4 =
    "steep ipsum dolor sit amet consectetur adipisicing elit. Eius illum non, quod veniam et amet rem voluptates dicta, molestiae explicabo commodi maiores. Fugiat, sapiente! Eius aspernatur voluptate vitae temporibus ex!";

  const handleDetails = (e) => {
    console.log(e.target.title);
    setDisplayDetails(true);
    setDisplayNone(true);
    setDetails(e.target.title);
  };

  const handleBack = () => {
    setDisplayDetails(false);
    setDisplayNone(false);
    setDetails("");
  };

  const handleFlip = () => {
    console.log("cindy");
    setIsAnimated(true);

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
        <div className={!displayNone ? classes.square : classes.squareNone}>
          <h3 title={info1} onClick={handleDetails}>
            My
          </h3>
        </div>
        <div className={!displayNone ? classes.square : classes.squareNone}>
          <h3 title={info2} onClick={handleDetails}>
            Tits
          </h3>
        </div>
        <div className={!displayNone ? classes.square : classes.squareNone}>
          <h3 title={info3} onClick={handleDetails}>
            Has
          </h3>
        </div>
        <div className={!displayNone ? classes.square : classes.squareNone}>
          <h3 title={info4} onClick={handleDetails}>
            Customer
          </h3>
        </div>
        {displayDetails && (
          <div className={classes.detailContainer}>
            <p className={classes.p}>{details}</p>
            <button onClick={handleBack}>Back</button>
          </div>
        )}
      </div>
      <BaseInteractive
        onClick={handleFlip}
        baseDiv={`${base.card}`}
      >
        {!flip && <img className={base.theone} src={cindy} alt="" />}
        {flip && <span className={base.para}>{data}</span>}
      </BaseInteractive>
    </>
  );
}
