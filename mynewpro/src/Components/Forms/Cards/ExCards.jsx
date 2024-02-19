import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const products = [
    {
      id: "1",
      name: "car",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXnif1DU2GKW-9CH-xH66sze6xQkl7pEtk7djujTgNapef-O21vRI37sWCz0YT26Tclc&usqp=CAU",
      title:"This is my car",
     
    },
    {
        id: "1",
        name: "flowers",
        image:"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS4WH3Cpe1X75X4LhbHdyJo3vPEs0ufiHQhHjkqEnMjbPqViSEVI-nqF0NpeLscSR-7",
        title:"This is my flower"
      },
      {
        id: "1",
        name: "notebook",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcuQ4GySg31NfMK6ccv2Bxikrqed-ZN_IP4T8X9lmmCoJFPNPczl33OlJ1A&s",
        title:"This is my notebook"
      },
      {
        id: "1",
        name: "countary",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34BrOWwS8VybWtwGqHrtQO8pVgpw9gxUCmw&usqp=CAU",
        title:"This is my countary"
      },
  ];

  const CarCard = () => {
    const [CarData, setCarData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const apiurl = 'https://api.pexels.com/v1/search?query=Car'
    const apikey = 't2IaGGA1Im5dxrwur9s8nBMY6GdBwvVYrpBKPWXzh4KC09QEXzulsud4'
    const navigate = useNavigate()
    const Click = () => {

        navigate('/car')
    }

    useEffect(() => {
        function Print() {
            axios.get(apiurl,

                {
                    headers: {
                        "Authorization": apikey
                    }
                })
                .then(
                    response => {
                        console.log(response.data['photos'])
                        setCarData(response.data['photos'])
                        setLoading(false)
                    }
                )

        }
        Print()
    }, [])
  }

  
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
