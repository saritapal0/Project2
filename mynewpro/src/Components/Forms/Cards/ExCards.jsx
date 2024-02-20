import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const products = [
    {
      uid: 1,
      id:"Car",
      name: "Car",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXnif1DU2GKW-9CH-xH66sze6xQkl7pEtk7djujTgNapef-O21vRI37sWCz0YT26Tclc&usqp=CAU",
      title:"This is my car",
     
    },
    {
        uid: 2,
        id:"Flower",
        name: "Flowers",
        image:"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS4WH3Cpe1X75X4LhbHdyJo3vPEs0ufiHQhHjkqEnMjbPqViSEVI-nqF0NpeLscSR-7",
        title:"This is my flower"
      },
      {
        uid: 3,
        id:"Notebook",
        name: "Notebook",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcuQ4GySg31NfMK6ccv2Bxikrqed-ZN_IP4T8X9lmmCoJFPNPczl33OlJ1A&s",
        title:"This is my notebook"
      },
      {
        uid: 4,
        id:"Country",
        name: "Country",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34BrOWwS8VybWtwGqHrtQO8pVgpw9gxUCmw&usqp=CAU",
        title:"This is my countary"
      },

  ];

     
const ExCards=()=>{
const navigate = useNavigate()
  const Click = (id) => {
    
    navigate(`/cards/${id}`)
    console.log("Click")
}
  
       return (
        <Grid container spacing={2}>
          {products.map((post) => (
            <Grid item key={post.uid} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card onClick = {()=>Click(post.id)}>
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
