/**
 * @author Amanjot Singh
 **/

import { Container, Grid } from "@mui/material";
import React from "react";
import reviewsData from "../../data/reviews.json"
import ReviewCard from "../../components/ReviewCard";

function Reviews() {
  return (
    <Container sx={{ py: 8 }} maxWidth="l">
      <Grid container spacing={8}>
        {reviewsData.map((review) => (
          <Grid item key={review.reviewId} xs={12} sm={12} md={6}>
            <ReviewCard
              key={review.reviewId}
              id={review.reviewId}
              title={review.reviewTitle}
              description={review.reviewDescription}
              fullReview={review.fullReview}
              imgURL={review.reviewImg}
              yt={review.reviewYT}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Reviews;
