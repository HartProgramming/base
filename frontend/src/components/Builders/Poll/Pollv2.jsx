import React, { useEffect, useState } from "react";

import AddButton from "../Parts/Buttons/AddButton";
import BaseBuilder from "../Parts/Layout/BaseBuilder";
import BaseSection from "../../Elements/Base/BaseSection";
import Flexer from "../../Elements/Layout/Container/Flexer";
import FormField from "../../Elements/Fields/FormField";
import HelpText from "../Parts/Text/HelpText";
import MappedSelectField from "./MappedSelectField";
import Pollv2List from "./Pollv2List";

import { handleDataChange } from "../../../utils/dataHandlers/dataHandlers";
import Pollv2Tile from "./Pollv2Tile";

const initialPollFormData = {
  style: "List",
  listStyle: "",
  tileStyle: "",
  question: "",
  type: "Single",
  votes: "Select Number of Votes",
  options: [],
};
const typeOptions = [
  { label: "Single Vote", value: "Single" },
  { label: "Multiple Votes", value: "Multiple" },
];
const styleOptions = [
  { label: "Tile", value: "Tile" },
  { label: "Condensed", value: "Condensed" },
  { label: "List", value: "List" },
];

const listStyleOptions = [
  { label: "None", value: "None" },
  { label: "Numbered", value: "Numbered" },
  { label: "Alphabetical", value: "Alphabetical" },
];

const tileStyleOptions = [
  { label: "Rectangle", value: "Rectangle" },
  { label: "Square", value: "Square" },
];

export default function Pollv2() {
  const [formData, setFormData] = useState(initialPollFormData);
  const [optionVal, setOptionVal] = useState(null);
  const [voteBtn, setVoteBtn] = useState(false);
  const [vote, setVote] = useState()
  const [results, setResults] = useState()
  const [display, setDisplay] = useState()

  useEffect(() => {
    console.log(vote)
  }, [vote])

  const changeFormData = (e) => {
    handleDataChange(e, setFormData, formData);
    console.log(formData);
  };

  const handleOption = (e) => {
    setOptionVal(e.target.value);
  };

  const addOption = (e) => {
    setVoteBtn(true);
    setFormData({
      ...formData,
      options: [...formData.options, optionVal],
    });
    setOptionVal("");
    console.log([...formData.options, optionVal]);
    console.log(formData);
  };

  const handleVote = (e) => {
    e.preventDefault()
    console.log(vote)
    if(vote.single !== undefined){
      setResults(vote.single)
    }else{
      setResults(vote.multiple)
    }
  };

  useEffect(() => {
    setDisplay(results)
  }, [results])

  return (
    <BaseBuilder header="Poll Builder" headerType="h2">
      <BaseSection
        header="Poll Settings"
        headerAlign="center"
        justifyChildren="center"
        pad={0}
        boxShadow={0}
      >
        <MappedSelectField
          value={formData.style}
          name="style"
          onChange={changeFormData}
          helpText="Select Style"
          optionsArray={styleOptions}
        />
        {formData.style === "List" && (
          <MappedSelectField
            value={formData.listStyle}
            name="listStyle"
            onChange={changeFormData}
            helpText="Select List Style"
            optionsArray={listStyleOptions}
          />
        )}
        {formData.style === "Tile" && (
          <MappedSelectField
            value={formData.tileStyle}
            name="tileStyle"
            onChange={changeFormData}
            helpText="Select Tile Style"
            optionsArray={tileStyleOptions}
          />
        )}
        <HelpText>Create a Question</HelpText>
        <FormField
          required
          id="question"
          value={formData.question}
          onChange={changeFormData}
        />
        <MappedSelectField
          value={formData.type}
          name="type"
          onChange={changeFormData}
          helpText="Select Type"
          optionsArray={typeOptions}
          firstOptionText="Select Type"
        />
        {formData.type === "Multiple" && (
          <MappedSelectField
            value={formData.votes}
            name="votes"
            onChange={changeFormData}
            helpText="Select Number of Votes"
            optionsArray={Array.from({ length: 4 }, (_, i) => ({
              label: `${i + 1}`,
              value: `${i + 1}`,
            }))}
          />
        )}
        <HelpText>Type in Option</HelpText>
        <FormField
          required
          value={optionVal}
          onChange={handleOption}
          fullWidth
        />
        <Flexer mt={8} j="fe">
          <AddButton label="Option" addFunc={addOption} disabled={!optionVal} />
        </Flexer>
      </BaseSection>
      <div
        style={{ border: "1px solid black", display: "flex", margin: "auto" }}
      >
        <BaseSection
          header="Poll Preview"
          headerAlign="center"
          fd="column"
          justifyChildren="center"
          a="center"
          pad={0}
          boxShadow={0}
          pt={2}
        >
          <h2 style={{ marginLeft: "25px", marginBottom: "-10px" }}>
            {formData.question}
          </h2>
          <form onSubmit={handleVote}>
            {formData.style === "List" && (
              <Pollv2List
                style={formData.listStyle}
                options={formData.options}
                type={formData.type}
                vote={setVote}
              />
            )}
            {formData.style === "Tile" && (
              <Pollv2Tile
                style={formData.tileStyle}
                options={formData.options}
                type={formData.type}
              />
            )}
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {voteBtn && (
                <button
                  type='submit'
                  style={{
                    padding: "5px",
                    letterSpacing: "1.2px",
                    fontWeight: 600,
                    borderRadius: "4px",
                  }}
                >
                  Vote
                </button>
              )}
            </div>
          </form>
        </BaseSection>
      </div>
      <div>
        <p>{display}</p>
      </div>
    </BaseBuilder>
  );
}
