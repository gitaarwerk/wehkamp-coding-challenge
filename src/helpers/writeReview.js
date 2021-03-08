// recalculate based on all ratings, as it's more reliable, as i.e. when a review is deleted, it should always recalculate.
function recalculateRating(currentRatings, addedRating, currentRatingAmount) {
  // sum all reviews together
  const calculatedCurrentRatings = currentRatings.reduce((a, b) => a + b, 0);
  // add new rating
  return (calculatedCurrentRatings + addedRating) / (currentRatingAmount + 1);
}

export function writeReview(productReviewsState, productId, review) {
  // buffer result
  const getSectionForProductId = productReviewsState.find(
    (productReview) => productReview.productId === productId
  );

  // already has a product rating, adding
  if (!!getSectionForProductId) {
    // filter the new state to return without doubles
    const filteredState = productReviewsState.filter(
      (reviewItem) => reviewItem.productId !== productId
    );

    const allRatingsArray = getSectionForProductId.reviews.map(
      (review) => review.rating
    );

    filteredState.push({
      productId,
      rating: recalculateRating(
        allRatingsArray,
        review.rating,
        getSectionForProductId.amountOfReviews
      ),
      amountOfReviews: allRatingsArray.length + 1,
      reviews: [...getSectionForProductId.reviews, review],
    });

    // early return
    return {
      productReviews: filteredState,
    };
  }

  // or else
  return {
    productReviews: [
      ...productReviewsState,
      {
        productId,
        rating: review.rating,
        amountOfReviews: 1,
        reviews: [review],
      },
    ],
  };
}
