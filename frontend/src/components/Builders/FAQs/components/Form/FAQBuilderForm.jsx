import React, { useEffect, useState } from "react";
import {
  Typography,
  Divider,
  Grid,
  Container,
  MenuItem,
} from "@material-ui/core";
import BasicSelect from "../../../../Elements/Fields/BasicSelect";
import AddButton from "../../../Parts/Buttons/AddButton";
import BaseContent from "../../../../Elements/Base/BaseContent";
import ClearButton from "../../../Parts/Buttons/ClearButton";
import ErrorMessage from "../../../../Elements/Errors/ErrorMessage";
import FormField from "../../../../Elements/Fields/FormField";
import HelpText from "../../../Parts/Text/HelpText";

import { faqBuilderStyles } from "../../faqBuilderStyles";
import { faqFieldNames, fieldNames } from "../../const/faqConstants";
import { faqExamplesStyles } from "../../examples/styles/faqExampleStyles";

const FAQBuilderForm = ({
  formData,
  handleChange,
  handleClear,
  handleClearFAQ,
  handleAddFAQ,
  errors,
  handleClearErrors,
}) => {
  const [faqType, setFaqType] = useState();
  const classes = faqBuilderStyles();

  const selectType = ["Standard", "Dense", "Tile"];
  useEffect(() => {
    setFaqType('Standard')
  }, [])

  const handleSelect = (e) => {
    console.log(e);
    setFaqType(e.target.value);
  };

  return (
    <BaseContent
      header="FAQ Builder"
      subheader="FAQ Settings"
      justifyChildren="center"
    >
      <div style={{ marginTop: 0, marginBottom: 16, width: "100%" }}>
        <Divider />
      </div>

      {faqFieldNames.map((field) => {
        return (
          <Grid
            item
            xs={12}
            md={field.md}
            style={{ paddingRight: 12, width: "100%" }}
          >
            <Container
              justify="flex-start"
              style={{ width: "100%", padding: 0 }}
            >
              <HelpText>{field.label}</HelpText>

              <FormField
                required
                multiline={field.multiline}
                id={field.name}
                onChange={handleChange}
                value={formData[field.name]}
                minRows={4}
                style={{
                  backgroundColor: "#e6e6e6",
                  boxShadow: "2px 2px 5px black",
                }}
              />
            </Container>
          </Grid>
        );
      })}

      <div style={{ marginBottom: 0, marginTop: 0, width: "65%" }}>
        <div>
          <BasicSelect onChange={handleSelect} value={faqType}>
            <MenuItem value="" disabled>
              <em>Select Type</em>
            </MenuItem>
            <MenuItem value="Tile">Tile</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Dense">Dense</MenuItem>
            {/* <MenuItem value="Large">Large</MenuItem> */}
          </BasicSelect>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <ClearButton
            clearFunc={handleClearFAQ}
            disabled={!formData.name && !formData.description}
          />
        </div>
      </div>

      <div style={{ marginTop: 32, marginBottom: 0, width: "100%" }}>
        <Typography variant="body2" className={classes.subheader}>
          Question Set Item
        </Typography>
      </div>
      <div style={{ marginTop: 0, marginBottom: 16, width: "100%" }}>
        <Divider />
      </div>
      {fieldNames.map((field) => {
        return (
          <Grid
            item
            xs={12}
            md={field.md}
            style={{ paddingRight: 12, width: "100%" }}
          >
            <Container
              justify="flex-start"
              style={{ width: "100%", padding: 0 }}
            >
              <HelpText>{field.label}</HelpText>
              <FormField
                required
                multiline={field.multiline}
                id={field.name}
                onChange={handleChange}
                value={formData[field.name]}
                minRows={4}
                style={{
                  backgroundColor: "#e6e6e6",
                  boxShadow: "2px 2px 5px black",
                }}
              />
            </Container>
          </Grid>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <ClearButton
          clearFunc={handleClear}
          disabled={
            !formData.question &&
            !formData.answer &&
            !formData.category &&
            !formData.order
          }
        />
      </div>
      <div style={{ marginBottom: 0, marginTop: 16, width: "100%" }}>
        <div className={classes.addActions}>
          <AddButton label="Item to FAQ" addFunc={handleAddFAQ} />
        </div>
      </div>
      {errors && (
        <div style={{ marginBottom: 24 }}>
          <ErrorMessage errors={errors} clearFunc={handleClearErrors} />
        </div>
      )}
    </BaseContent>
  );
};

export default FAQBuilderForm;
