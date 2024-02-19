import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const products = [
    {
      id: "1",
      name: "car",
      image:"",
      title:"nsfnkn"
    },
    {
      id: "2",
      name: "flower",
      post: "Project Manager",
      pname: "Real Homes WP Theme",
      priority: "Medium",
      pbg: "secondary.main",
      budget: "24.5",
    },
    {
      id: "3",
      name: "notebook",
      post: "Project Manager",
      pname: "MedicalPro WP Theme",
      priority: "High",
      pbg: "error.main",
      budget: "12.8",
    },
    {
      id: "4",
      name: "countary",
      post: "Frontend Engineer",
      pname: "Hosting Press HTML",
      priority: "Critical",
      pbg: "success.main",
      budget: "2.4",
    },
  ];
  
   const ExCards=()=>{
       return (
        <Grid container spacing={2}>
          {products.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.image}
                    alt={post.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
    
export default ExCards 
