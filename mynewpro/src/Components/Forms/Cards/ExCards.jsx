import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'


import {
  Grid,
  InputBase,
  IconButton,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { selectMovieData, selectSearchTerm, selectDataNotFound,selectStatus,selectError,fetchMovieData,setDataNotFound,setSearchTerm} from "../../../Action/movieSlice";

const MovieCard = ({ photographer, url }) => {
  return (
    <Card style={{ cursor: "pointer" }}>
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
};

const ExCard = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(selectMovieData);
  const searchTerm = useSelector(selectSearchTerm);
  const dataNotFound = useSelector(selectDataNotFound);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovieData(searchTerm));
    }
  }, [dispatch, searchTerm, status]);

  const handleSearch = () => {
    // dispatch (setmovieData([]));
    dispatch (fetchMovieData(searchTerm))
  };

  const handleCardClick = (photographer) => {
    navigate(`Movie/${photographer}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="center-container">
      <div className="search-bar">
        <Paper>
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            style={{ textAlign: "center", width: "auto", padding: "5px" }}
          />
          <IconButton aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <Grid container spacing={2} className="data-container">
        {dataNotFound ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img
              src="https://i.pinimg.com/originals/06/6e/56/066e56cdf8e10f34e2a03ac933238735.jpg"
              alt="No Results Found"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h2 style={{ marginTop: "20px" }}>No Results Found</h2>
            <p>Sorry, no results were found for the search term.</p>
          </div>
        ) : (
          movieData.map((photo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
              <MovieCard
                photographer={photo.photographer}
                url={photo.src.tiny}
                onClick={() => handleCardClick(photo.photographer)}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ExCard;
