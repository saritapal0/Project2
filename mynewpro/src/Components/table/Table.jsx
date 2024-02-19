import React from 'react'
import { Card, CardContent, Box, Typography } from "@mui/material";


const Table=( )=> {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">Basic Table</Typography>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
          <h1>Table</h1>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Table;
