import React from "react";
import styled from "styled-components";
import { MAX_RATING } from "./consts";
import { TextLink } from "../UIElements/TextLink";
import { RatingStars } from "./RatingStars";
export const ReviewRating = ({
  className,
  amountOfReviews,
  rating,
  writeReview,
}) => (
  <RatingContainer
    className={className}
    title={`Reviewscore is ${rating / 10} van de ${
      MAX_RATING / 10
    } sterren op basis van ${amountOfReviews} ${
      amountOfReviews > 1 ? "reviews" : "review"
    }`}
  >
    <StyledRatingStars rating={rating} maxRating={MAX_RATING} />
    {!!amountOfReviews && (
      <span>
        {amountOfReviews} {amountOfReviews > 1 ? "reviews" : "review"}
      </span>
    )}
    {!amountOfReviews && (
      <TextLink onClick={writeReview}>Schrijf de eerste review</TextLink>
    )}
  </RatingContainer>
);

const RatingContainer = styled.div`
  display: flex;
`;

const StyledRatingStars = styled(RatingStars)`
  height: 20px;
  width: 130px;
`;
