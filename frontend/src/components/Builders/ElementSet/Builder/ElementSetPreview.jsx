import React from "react";
import { Divider } from "@material-ui/core";
import BaseContent from "../../../Elements/Base/BaseContent";
import useExampleSwitch from "../../Parts/Menus/ExampleSwitch/useExampleSwitch";
import ExampleSwitchMenu from "../../Parts/Menus/ExampleSwitch/ExampleSwitchMenu";
import Flexer from "../../../Elements/Layout/Container/Flexer";
import BaseSection from "../../../Elements/Base/BaseSection";
import SectionSkeleton from "../Display/Skeletons/OneColumnSkeleton";
import TwoColumnImageText from "../Display/Examples/TwoColumnImageText";
import TwoColumnImageCard from "../Display/Examples/TwoColumnCardText";
import TwoColumnTextDense from "../Display/Examples/TwoColumnTextDense";
import OneColumnImageText from "../Display/Examples/OneColumnImageText";
import OneColumnTextDense from "../Display/Examples/OneColumnTextDense";
import TwoColumnAccordionImage from "../Display/Examples/TwoColumnAccordionImage";
import OneColumnAccordionImage from "../Display/Examples/OneColumnAccordionImage";
import OneColumnImageCard from "../Display/Examples/OneColumnImageCard.jsx";
import OneColumnTextAccordion from "../Display/Examples/OneColumnTextAccordion";
import OneColumnTextCard from "../Display/Examples/OneColumnTextCard";

const layoutOptions = [
  { value: "option1", label: "Two Column - Image / Text" },
  { value: "option2", label: "Two Column - Image / Card" },
  { value: "option3", label: "Two Column - Text Dense" },
  { value: "option4", label: "Two Column - Accordion / Image" },
  { value: "option5", label: "One Column - Image / Text" },
  { value: "option6", label: "One Column - Image / Card" },
  { value: "option7", label: "One Column - Text Dense" },
  { value: "option8", label: "One Column - Accordion / Image" },
  { value: "option9", label: "One Column - Text / Accordion" }, 
  { value: "option10", label: "One Column - Text / Card(s)" },
];

const ElementSetPreview = ({
  formData,
  colOneHeaderData,
  colTwoHeaderData,
}) => {
  const { selectedOption, handleOptionSelect, showExample, handleShowExample } =
    useExampleSwitch(layoutOptions);

  return (
    <BaseContent fd="column" header="Element Set Preview">
      <div style={{ marginTop: 0, marginBottom: 0 }}>
        <Divider />
      </div>
      <ExampleSwitchMenu
        showExample={showExample}
        handleShowExample={handleShowExample}
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
        layoutOptions={layoutOptions}
      />
      {!showExample ? (
        <BaseSection
          // header={showExample ? "Layout Previews" : formData.name || "Card Name"}
          header={formData.name || "Element Set Name"}
          justifyChildren="center"
          pad={0}
          boxShadow={0}
          pb={2}
          collapse
          headerAlign="center"
        >
          <SectionSkeleton
            columnOneHeader={colOneHeaderData}
            columnTwoHeader={colTwoHeaderData}
          />
        </BaseSection>
      ) : (
        <Flexer j="c" mt={16}>
          {selectedOption === "option1" && <TwoColumnImageText />}
          {selectedOption === "option2" && <TwoColumnImageCard />}
          {selectedOption === "option3" && <TwoColumnTextDense />}
          {selectedOption === "option4" && <TwoColumnAccordionImage />}
          {selectedOption === "option5" && <OneColumnImageText />}
          {selectedOption === "option6" && <OneColumnImageCard />}
          {selectedOption === "option7" && <OneColumnTextDense />}
          {selectedOption === "option8" && <OneColumnAccordionImage />}
          {selectedOption === "option9" && <OneColumnTextAccordion />}
          {selectedOption === "option10" && <OneColumnTextCard />}
        </Flexer>
      )}
    </BaseContent>
  );
};

export default ElementSetPreview;
