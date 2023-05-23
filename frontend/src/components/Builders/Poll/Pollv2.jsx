import React, { useState } from "react";

import AddButton from "../Parts/Buttons/AddButton";
import BaseBuilder from "../Parts/Layout/BaseBuilder";
import BaseSection from "../../Elements/Base/BaseSection";
import Flexer from "../../Elements/Layout/Container/Flexer";
import FormField from "../../Elements/Fields/FormField";
import HelpText from "../Parts/Text/HelpText";
import MappedSelectField from "./MappedSelectField";
import Pollv2List from "./Pollv2List";

import { handleDataChange } from "../../../utils/dataHandlers/dataHandlers";

const initialPollFormData = {
  style: "List",
  listStyle: "",
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

export default function Pollv2() {
  const [formData, setFormData] = useState(initialPollFormData);
  const [optionVal, setOptionVal] = useState(null);

  const changeFormData = (e) => {
    handleDataChange(e, setFormData, formData);
    console.log(formData);
  };

  const handleOption = (e) => {
    setOptionVal(e.target.value);
  };

  const addOption = (e) => {
    setFormData({
      ...formData,
      options: [...formData.options, optionVal],
    });
    setOptionVal("");
    console.log([...formData.options, optionVal]);
    console.log(formData);
  };

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
            optionsArray={Array.from({ length: 69 }, (_, i) => ({
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

      <BaseSection
        header="Poll Preview"
        headerAlign="center"
        fd="column"
        justifyChildren="center"
        a='center'
        pad={0}
        boxShadow={0}
        pt={2}
      >
        <h2 style={{marginLeft: '25px', marginBottom: '-10px'}}>{formData.question}</h2>
        <Pollv2List
          style={formData.listStyle}
          options={formData.options}
          type={formData.type}
       />
        
      </BaseSection>
    </BaseBuilder>
  );
}
