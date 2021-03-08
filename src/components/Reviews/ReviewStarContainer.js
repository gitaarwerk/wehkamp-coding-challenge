import React from "react";
import PropTypes from "prop-types";
import { ReviewRating } from "./ReviewRating";
import { getReviewRatingsForProductId } from "../../selectors";
import { useSelector } from "react-redux";

export const ReviewStarContainer = ({ productId, className, openWindow }) => {
  const { amountOfReviews, rating } = useSelector((state) =>
    getReviewRatingsForProductId(state, productId)
  );

  const writeReview = () => {
    if (amountOfReviews === 0) {
      openWindow()
    }
  };

  return (
    <ReviewRating
      amountOfReviews={amountOfReviews}
      rating={rating}
      writeReview={writeReview}
      className={className}
    />
  );
};

ReviewStarContainer.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  amountOfReviews: PropTypes.number,
  writeReviewLink: PropTypes.func,
  gotoReviewLink: PropTypes.func,
};
