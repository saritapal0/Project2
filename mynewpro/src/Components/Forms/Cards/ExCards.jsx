import React, { useEffect, useState } from "react";
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
import { selectMovieData, selectSearchTerm, selectDataNotFound,selectStatus,selectError,fetchMovieData,setDataNotFound,setSearchTerm} from "../../../Action/movieSlice";
import { fetchNewsData, selectNewsData, setNewsData } from "../../../Action/NewsSlice";

const MovieCard = ({ photographer, url,onClick }) => {
  return (
    <Card style={{ cursor: "pointer" }} onClick={onClick} >
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
  const newsData = useSelector(selectNewsData);
  const [News,setNews]=useState(false)
  const [isCardClicked,setisCardClicked] = useState(false)
  
  

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovieData(searchTerm));
    }
  }, [dispatch, searchTerm, status]);

  const handleSearch = () => {
    
    dispatch (fetchMovieData(searchTerm))
  };

  const handleCardClick = () => {
   dispatch(fetchNewsData())
   setNews(true)
   setisCardClicked(true)
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
       (isCardClicked ? newsData : movieData).map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id || item.newsId}>
              <MovieCard
                photographer={isCardClicked ? item.newsTitle : item.photographer}
                url={isCardClicked ? item.mediaPath : item.src.tiny}
                onClick={handleCardClick}
              />
            </Grid>
           
        ))
      )}
    </Grid>

   
  </div>
);
};

export default ExCard;
