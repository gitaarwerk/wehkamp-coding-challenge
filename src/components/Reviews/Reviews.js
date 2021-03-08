import React from "react";
import { RatingStars } from "./RatingStars";
import styled from "styled-components";

export const Reviews = ({ reviews }) => (
  <StyledSection>
    {console.log("reviews...", reviews)}
    {reviews.map((review) => (
      <article key={review.timestamp}>
        <h3>{review.title}</h3>
        <small>Geschreven door: {review.user}</small>
        <StyledRatingStars rating={review.rating} />
        <TextContainer>
          <p>{review.review}</p>
        </TextContainer>
      </article>
    ))}
  </StyledSection>
);

const StyledRatingStars = styled(RatingStars)`
  height: 20px;
  margin-top: 16px;
`;

const TextContainer = styled.div`
  margin: 32px 4px;
`;

const StyledSection = styled.section`
  margin-bottom: 24px;
  margin-top: 16px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 16px;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 48px;
  }
`;
