import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Car = () => {
    const [CarData, setCarData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {id} = useParams()
    const apiurl = `https://api.pexels.com/v1/search?query=${id}`
    const apikey = 't2IaGGA1Im5dxrwur9s8nBMY6GdBwvVYrpBKPWXzh4KC09QEXzulsud4'
   
    

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
    }, [id])

    if (isLoading) {
        return (<div className='logo'>

            <img
                src="web.webp"
                alt=""

            />
        </div>)
    } else {

        return (
            <>
                
                <Stack spacing={2} direction='row'>
                    {CarData.map((post) => (


                        <Card key={post.id} sx={{ maxWidth: 300 }} >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 200, width: 300 }}
                                    component="img"
                                    height="140"
                                    image={post.src.tiny}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.photographer}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.alt}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}

                </Stack>
            </>
        );
    }
}
export default Car  
