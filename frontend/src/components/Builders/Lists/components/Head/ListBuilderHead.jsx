import React from "react";
import { Grid, TextField, Select, MenuItem } from "@material-ui/core";
import ErrorMessage from "../../../../Elements/Errors/ErrorMessage";
import SaveButton from "../../../Parts/Buttons/SaveButton";
import { listHeadStyles } from "./listHeadStyles";

const ListBuilderHead = ({
  formData,
  handleChange,
  handleSubmit,
  apiErrors,
}) => {
  const classes = listHeadStyles();

  return (
    <Grid container spacing={3} xs={12} style={{ marginBottom: 24, flexDirection: 'column', margin: 'auto'}}>
      <Grid item xs={12} md={12}>
        <div className={classes.tableActions}>
          <div className={classes.saveActions}>
            <div style={{padding: 5, width: 300, marginRight: 24 }}>
              <TextField
                required
                fullWidth
                name="listName"
                label="List Name"
                value={formData.listName}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: 300, marginRight: 24 }}>
              <Select
                className={classes.select}
                value={formData.listType}
                onChange={handleChange}
                name="listType"
                displayEmpty
                margin="dense"
                style={{marginBottom: 15, minWidth: "100%", padding: 5 }}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                  classes: {
                    paper: classes.menuPaper,
                  },
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select Type</em>
                </MenuItem>
                <MenuItem value="Unordered">Unordered</MenuItem>
                <MenuItem value="Ordered">Ordered</MenuItem>
                <MenuItem value="Icon">Icon</MenuItem>
                <MenuItem value="Image">Image</MenuItem>
              </Select>
            </div>
            <div>
              <SaveButton className={classes.saveButton} label="List" submitFunc={handleSubmit} />
            </div>
          </div>

          {apiErrors && (
            <div style={{ marginBottom: 24 }}>
              <ErrorMessage errors={apiErrors} />
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default ListBuilderHead;
