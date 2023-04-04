import useOpacityGrow from "../../hooks/Animations/useOpacityGrow";
import useOpacityShrink from "../../hooks/Animations/useOpacityShrink";
import React, { useEffect, useState } from "react";

export default function AnimationWrapper(props) {
  const [styles, setStyles] = useState();
  const [transition, setTransition] = useState(props.animate);
  const [data, setData] = useState(props.data);
  const [opacityGrow, setOpacityGrow, opacityGrowClass] = useOpacityGrow();
  const [opacityShrink, setOpacityShrink, opacityShrinkClass] =
    useOpacityShrink();

  useEffect(() => {
    console.log(props.animate);
    if (data === "shrink-grow") {
      if (props.animate === "grow") {
        setOpacityGrow(true);
        setOpacityShrink(false);
        setStyles(opacityGrowClass);
      } else if (props.animate === "shrink") {
        setOpacityShrink(true);
        setOpacityGrow(false);
        setStyles(opacityShrinkClass); 
      }
    }
  }, [opacityShrink, props.animate, styles, opacityShrinkClass, opacityGrowClass, opacityGrow]);

  return (
    <>
      <div className={`${props.className} ${styles}`}>{props.children}</div>
    </>
  );
}
