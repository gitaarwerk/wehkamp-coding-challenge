import { handleActions } from "redux-actions";
import * as types from "./actionTypes";
import { writeReview } from "./helpers/writeReview";

const defaultState = {
  productReviews: [],
};

export default handleActions(
  {
    [types.ADD_REVIEW]: (state, { payload }) => {
      console.log(payload);
      const newState = writeReview(
        state.productReviews,
        payload.productId,
        payload.review
      );

      return {
        ...state,
        productReviews: newState.productReviews,
      };
    },
  },
  defaultState
);
