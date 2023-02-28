import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { ReviewStyles1, ReviewStyles2 } from "./ReviewsStyles";

const reviewsData = [
  {
    name: "John Doe",
    rating: 4,
    review: "Great service! Would highly recommend.",
    avatar: "https://i.pravatar.cc/150?img=67",
    platform: "Google Reviews",
    date: "July 12, 2022",
    title: "Life Changing",
  },
  {
    name: "Jane Smith",
    rating: 5,
    review: "The best service I have ever used!",
    avatar: "https://i.pravatar.cc/150?img=42",
    platform: "Facebook",
    date: "June 23, 2022",
    title: "Cleaned my Urethra out",
  },
  {
    name: "Bob Johnson",
    rating: 3,
    review: "Service was good, but could have been better.",
    avatar: "https://i.pravatar.cc/150?img=69",
    platform: "Yelp",
    date: "May 5, 2022",
    title: "Areolas feel great",
  },
];

const Reviews = () => {
  let classes;
  const [design, setDesign] = useState(2);

  if (design === 1) {
    classes = ReviewStyles1();
  } else if (design === 2) {
    classes = ReviewStyles2();
  }

  return (
    <>
      {design === 1 && (
        <Box className={classes.root}>
          <Typography variant="h4" gutterBottom>
            What Our Customers Are Saying
          </Typography>
          <Grid container spacing={2} className={classes.reviewGrid}>
            {reviewsData.map((review, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={3} className={classes.reviewPaper}>
                  <Box>
                    <Box className={classes.reviewContainer}>
                      <Avatar
                        alt={review.name}
                        src={review.avatar}
                        className={classes.avatar}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {review.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className={classes.reviewDate}
                        >
                          {review.platform} - {review.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.reviewRating}>
                      <Rating
                        name={`rating-${index}`}
                        value={review.rating}
                        readOnly
                      />
                    </Box>
                    <Divider
                      variant="middle"
                      className={classes.reviewDivider}
                    />
                    <Typography variant="body1" className={classes.reviewText}>
                      {review.review}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {design === 2 && (
        <Box className={classes.root}>
          <Typography variant="h4" gutterBottom>
            What Our Customers Are Saying
          </Typography>
          <Grid container spacing={2} className={classes.reviewGrid}>
            {reviewsData.map((review, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={3} className={classes.reviewPaper}>
                  <Box>
                    <Typography variant="h4" className={classes.reviewTitle}>
                      {review.title}
                    </Typography>
                    <Typography variant="body1" className={classes.reviewText}>
                      {review.review}
                    </Typography>
                    <Divider
                      variant="middle"
                      className={classes.reviewDivider}
                    />
                    <Box className={classes.reviewContainer}>
                      <Avatar
                        alt={review.name}
                        src={review.avatar}
                        className={classes.avatar}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {review.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className={classes.reviewDate}
                        >
                          {review.platform} - {review.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.reviewRating}>
                      <Rating
                        name={`rating-${index}`}
                        value={review.rating}
                        readOnly
                      />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Reviews;
