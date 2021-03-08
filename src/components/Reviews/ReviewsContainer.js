import React from "react";
import { useSelector } from "react-redux";
import { getAllReviewsForProductId } from "../../selectors";
import { Reviews } from "./Reviews";

export const ReviewsContainer = ({ productId }) => {
  const reviews = useSelector((state) =>
    getAllReviewsForProductId(state, productId)
  );
  return <Reviews reviews={reviews} />;
};
