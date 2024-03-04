import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import { ChartContainer, BarPlot } from '@mui/x-charts';
import { LineChart } from '@mui/x-charts/LineChart';




const BasicCards = () => {
   
    const data2 = [
        { label: 'Group A', value: 2400 },
        { label: 'Group B', value: 4567 },
        { label: 'Group C', value: 1398 },
        { label: 'Group D', value: 9800 },
        { label: 'Group E', value: 3908 },
        { label: 'Group F', value: 4800 },
      ];

      const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

  return (
    // **********************************  Row-1  **********************************************
    <Grid container spacing={4}>
      <Grid item lg={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Views
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              7,265
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Visits
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              3,671
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              New Users
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              156
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Active Users
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              2,318
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/*  ************************************************  Row -2 ************************************* */}

      <Grid item lg={8}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Users
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              2,318
            </Typography>
          </CardContent>
          <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
        </Card>
      </Grid>

      <Grid item md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <b>Traffic By Website</b>
            </Typography>
            <br />
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Google -----
              <br />
              <br />
              Youtube ----
              <br />
              <br />
              Instagram----
              <br />
              <br />
              pinterest----
              <br />
              <br />
              Facebook-----
              <br />
              <br />
              Twitter-----
            </Typography>
          </CardContent>
        </Card>
      </Grid>

{/* ****************************************   Bar cart p[ortion   ********************************* */}

      <Grid item md={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
             Traffic By Device
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              2,318
            </Typography>
          </CardContent>

          <ChartContainer
      width={500}
      height={300}
      series={[{ data: uData, label: 'uv', type: 'bar' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
        </Card>
      </Grid>
{/* *******************************  pi chart portion  ****************************************** */}

      <Grid item md={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Active Users
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              2,318
            </Typography>
          </CardContent>

          <PieChart
          series={[
        {
          data: data2,
          cx: 500,
          cy: 200,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    />
        </Card>
      </Grid>
    </Grid>
  );
};

export default BasicCards;
