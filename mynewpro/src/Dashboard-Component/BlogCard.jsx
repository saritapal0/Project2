import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import user1 from "../assets/images/backgrounds/u2.jpg";
// import user2 from "../assets/images/backgrounds/u3.jpg";
// import user3 from "../assets/images/backgrounds/u4.jpg";

// const blogs = [
//   {
//     img: user1,
//     title: "Super awesome, Angular 12 is coming soon!",
//     subtitle:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     btncolor: "error",
//   },
//   {
//     img: user2,
//     title: "Super awesome, Angular 12 is coming soon!",
//     subtitle:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     btncolor: "warning",
//   },
//   {
//     img: user3,
//     title: "Super awesome, Angular 12 is coming soon!",
//     subtitle:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     btncolor: "primary",
//   },
// ];




const BlogCard = () =>{
  const [blogcard, setBlogData] = useState([])
  const [loading] = useState('');
  const [setError] = useState(false);
  const apiurl = 'https://api.pexels.com/v1/search?query=india';
  const apikey = 't2IaGGA1Im5dxrwur9s8nBMY6GdBwvVYrpBKPWXzh4KC09QEXzulsud4';
  const navigate = useNavigate();

  useEffect(() => {
      const fetchData = async () => {
          try {
             const response = await axios.get(apiurl, {
                  headers: {
                      "Authorization": apikey
                  }
              });

              setBlogData(response.data['photos']);
              console.log(response.data['photos'])
              setError(response.data['photos'].length === 0);

          } catch (error) {
              console.log('error', error);
              setError(true);
              navigate('/NotFound');
          }
      }

      fetchData();
  }, [loading, apikey, navigate]);

  // const handleError = () => {
  //     setBlogDataNotFound(false);
  // };

  // const handleCardClick = (photographer) => {
  //     navigate(`BlogCard/${photographer}`);
  // };


  return (
    <Grid container>
      {blogcard.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <img src={blog.src.tiny} alt="img" width="100%" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.photographer}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.alt}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
