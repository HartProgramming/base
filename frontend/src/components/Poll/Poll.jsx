import { Grid, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import BaseContent from "../Elements/Base/BaseContent";
import BaseSection from "../Elements/Base/BaseSection";
import { MenuItem } from "@material-ui/core";
import { useTheme, useMediaQuery } from "@material-ui/core";
import BaseBuilder from "../Builders/Parts/Layout/BaseBuilder";
import FormField from "../Elements/Fields/FormField";
import HelpText from "../Builders/Parts/Text/HelpText";
import BasicSelect from "../Elements/Fields/BasicSelect";
import { useState } from "react";
const userStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    width: "95%",
  },
}));

export default function Poll() {
  const classes = userStyles();
  const theme = useTheme();
  const [multiple, setMultiple] = useState(false);
  const [options, setOptions] = useState(false);
  const [single, setSingle] = useState(false);
  const [style, setStyle] = useState(null)
  const [type, setType] = useState(null)
  const [optionVal, setOptionVal] = useState(null)
  const [questionVal, setQuestionVal] = useState(null)
  const [multVotes, setMultVotes] = useState(null)
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [optionsArr, setOptionsArr] = useState([])

  let arr = []

  const handleStyle = (e) => {
    console.log(e.target.value)
    setStyle(e.target.value)
  }

  const handleQuestion = (e) => {
    console.log(e.target.value)
    setQuestionVal(e.target.value)
  }

  /* When clicked this value will be passed to the backend then passed back to the frontend 
  in the preview portion */
  const createQuestion = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    console.log(questionVal)
  };

  const handleSaveDetails = () => {};

  const handleSelectType = (e) => {
    console.log(e)
    setType(e.target.value);
    setOptions(false)
    if (e.target.value === "multiple") {
      setSingle(false);
      setOptionsArr([]);
      setOptions(true);
      setMultiple(true);
    } else if (e.target.value === "single") {
      setMultiple(false);
      setOptionsArr([]);
      setOptions(true);
      setSingle(true);
    }
  };

  const multipleSelect = (e) => {
    console.log(e.target.value)
  }

  const handleOption = (e) => {
    setOptionVal(e.target.value)
  }

  const addOption = (e) => {
    e.preventDefault()
    let arr = []
    setOptionsArr([...optionsArr, optionVal])
    console.log(arr)
    console.log(optionsArr)
  }

  return (
    <>
    <BaseBuilder header="Poll Builder" headerGutter>
      <form onSubmit={handleSaveDetails} style={{}}>
        <HelpText>Select Style</HelpText>
        <BasicSelect onChange={handleStyle}>
          <MenuItem value="" disabled>Select Style</MenuItem>
          <MenuItem value='tile'>Tile</MenuItem>
          <MenuItem value='condensed'>Condensed</MenuItem>
          <MenuItem value='list'>List</MenuItem>
        </BasicSelect>
        <HelpText>Create a Question</HelpText>
          <FormField onChange={handleQuestion} required fullWidth id="name" />
        <HelpText>Select Type</HelpText>
        <BasicSelect onChange={handleSelectType} name="pollOptions">
          <MenuItem value="" disabled>
            Select Type
          </MenuItem>
          <MenuItem value="multiple">Multiple Votes</MenuItem>
          <MenuItem value="single">One Vote</MenuItem>
        </BasicSelect>
        
        {multiple && (
          <>
          <HelpText>Number of User Votes</HelpText>
          <BasicSelect onChange={multipleSelect}>
            <MenuItem value="" disabled>
              Select Number of Votes They Are Allowed To Select
            </MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='7'>7</MenuItem>
            <MenuItem value='8'>8</MenuItem>
            <MenuItem value='9'>9</MenuItem>
            <MenuItem value='10'>10</MenuItem>
          </BasicSelect>
          </>
        )}
        {options && (
          <div>
            <HelpText>Type in Option</HelpText>
            <FormField onChange={handleOption}></FormField>
            <button onClick={addOption}>Create</button>
          </div>
        )}
      </form>
      <div>
        <div>
          <h3>Poll Preview</h3>
        </div>
        <div>
          <h4>{questionVal}</h4>
          {single && optionsArr.map(x => {
            <input type='radio'>{x}</input>
          })}
          {multiple && optionsArr.length > 1 && optionsArr.map(x => {
            return(
            <input type='checkbox'>{x}</input>
            )
          })}
          
        </div>
      </div>
    </BaseBuilder>
    
    </>
  );
}
