import React from "react";
import { Grid } from "@material-ui/core";
import StyledButton from "../../Elements/Buttons/StyledButton";
import { Link } from "react-router-dom";

export default function CardButtons({ plan }) {
  return (
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12} justifyContent="center" style={{ display: "flex" }}>
        <Link to={`/services/${plan.id}`}>
          <StyledButton buttonText="View Details" />
        </Link>
      </Grid>
    </Grid>
  );
}
