export const getReviewRatingsForProductId = (state, productId) => {
  const reviews = state.productReviews.find(
    (product) => product.productId === productId
  );

  if (!!reviews) {
    return { rating: reviews.rating, amountOfReviews: reviews.amountOfReviews };
  }

  return {
    rating: 0,
    amountOfReviews: 0,
  };
};

export const getAllReviewsForProductId = (state, productId) => {
  const reviews = state.productReviews.find(
    (product) => product.productId === productId
  );

  return !!reviews && !!reviews.reviews.length > 0 ? reviews.reviews : [];
};
