import React from "react";

import { Grid, Box } from "@mui/material";

import {ColorButton} from '../../../Components/Forms/Button/ColorButton';
import {SizeButton} from '../../../Components/Forms/Button/SizeButton';
import {OutlineColorButton} from '../../../Components/Forms/Button/OutlineColorButton';
import {TextColorButton} from '../../../Components/Forms/Button/TextColorButton';
import {IconColorButton} from '../../../Components/Forms/Button/IconColorButton';
import {FebDefaultButton} from '../../../Components/Forms/Button/FebDefaultButton';
import {DefaultButton} from '../../../Components/Forms/Button/DefaultButton';

const ExButton = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <ColorButton />
        </Grid>

        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <SizeButton />
        </Grid>

        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <OutlineColorButton />
        </Grid>

        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <TextColorButton />
        </Grid>
        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <IconColorButton />
        </Grid>
        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <FebDefaultButton/>
        </Grid>

        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <DefaultButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExButton;
