import React from "react";
import { Grid, Box } from "@mui/material";
import Sales from "../Dashboard-Component/Sales";
import Daily from "../Dashboard-Component/Daily";
import Product from "../Dashboard-Component/Product";
import BlogCard from "../Dashboard-Component/BlogCard";


const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12}>
          <Sales/>
        </Grid>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid item xs={12} lg={4}>
          <Daily/>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Product/>
        </Grid>
        {/* ------------------------- row 3 ------------------------- */}
        <BlogCard/>
      </Grid>
    </Box>
  );
};

export default Dashboard;
