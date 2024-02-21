import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Grid, InputBase, IconButton, Paper, Card, CardContent, CardMedia, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ photographer, url }) => {
    return (
        <Card  style={{ cursor: 'pointer' }}>
            <CardMedia
                component="img"
                height="200"
                width="300"
                image={url}
                alt={photographer}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {photographer}
                </Typography>
            </CardContent>
        </Card>
    );
}

const MyCard = () => {
    const [movieData, setMovieData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [dataNotFound, setDataNotFound] = useState(false);
    const apikey = 't2IaGGA1Im5dxrwur9s8nBMY6GdBwvVYrpBKPWXzh4KC09QEXzulsud4';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiurl = '';

                if (searchTerm) {
                    apiurl = `https://api.pexels.com/v1/search?query=${searchTerm}`;
                } else {
                    apiurl = 'https://api.pexels.com/v1/search?query=india';
                }

                const response = await axios.get(apiurl, {
                    headers: {
                        "Authorization": apikey
                    }
                });

                setMovieData(response.data['photos']);
                setDataNotFound(response.data['photos'].length === 0);

            } catch (error) {
                console.log('error', error);
                setDataNotFound(true);
                navigate('/NotFound');
            }
        }

        fetchData();
    }, [searchTerm, apikey, navigate]);

    const handleSearch = () => {
        setDataNotFound(false);
    };

    const handleCardClick = (photographer) => {
        navigate(`Movie/${photographer}`);
    };

    return (
        <div className="center-container">
            <div className="search-bar">
                <Paper>
                    <InputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ textAlign: 'center', width: 'auto', padding: '5px' }}

                    />
                    <IconButton aria-label="search" onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>

            <Grid container spacing={2} className="data-container">
                {dataNotFound ? (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <img
                            src="https://i.pinimg.com/originals/06/6e/56/066e56cdf8e10f34e2a03ac933238735.jpg"
                            alt="No Results Found"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                        <h2 style={{ marginTop: '20px' }}>No Results Found</h2>
                        <p>Sorry, no results were found for the search term.</p>
                    </div>
                ) : (
                    movieData.map((photo) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                            <MovieCard photographer={photo.photographer} url={photo.src.tiny}
                                onClick={() => handleCardClick(photo.photographer)}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </div>
    );
};

export default MyCard;
