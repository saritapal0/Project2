import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import axios from "axios";
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




const BlogCard = () => {
  // const [blogcard,error,loading] = customblogs('urlpath')

  const [blogcard, setBlogCard] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setBlogCard(response.data)
        setLoading(false)
      }
      catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [])


  if (error) {
    return (
      <h1>something wrong</h1>
    )
  } else {
    if (loading) {
      return (
        <h1>loading</h1>
      )
    }
  }


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
            <img src={blog.img} alt="img" width="100%" />
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
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
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
