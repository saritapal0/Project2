import React from "react";
import { Grid, Box } from "@mui/material";

import { ComboBox } from "../../../Components/Forms/AutoComplete/ComboBox";
import { Multivalue } from "../../../Components/Forms/AutoComplete/Multivalue";
import { Checkboxes } from '../../../Components/Forms/AutoComplete/Checkbox';
import { Sizes } from "../../../Components/Forms/AutoComplete/Sizes";

const ExAutoComplete = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <ComboBox />
        </Grid>

        {/* ------------------------- row 5 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Multivalue />
        </Grid>

        {/* ------------------------- row 6 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Checkboxes />
        </Grid>
        {/* ------------------------- row 7 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Sizes />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExAutoComplete;
