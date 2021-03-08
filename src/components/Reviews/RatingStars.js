import React from "react";
import styled from "styled-components";
import { RatingStar } from "./RatingStar";

export const RatingStars = ({ className, rating }) => (
  <StyledRatingContainer className={className}>
    <StyledRatingStar isWhole={rating > 5 } isHalfy={rating <= 5 && rating > 0} />
    <StyledRatingStar
      isWhole={rating > 15}
      isHalfy={rating <= 15 && rating > 10}
    />
    <StyledRatingStar
      isWhole={rating > 25}
      isHalfy={rating <= 25 && rating > 20}
    />
    <StyledRatingStar
      isWhole={rating > 35}
      isHalfy={rating <= 35 && rating > 30}
    />
    <StyledRatingStar
      isWhole={rating > 45}
      isHalfy={rating <= 45 && rating > 40}
    />
  </StyledRatingContainer>
);

const StyledRatingContainer = styled.div`
  color: #f55;
  position: relative;
  display: flex;
`;

const StyledRatingStar = styled(RatingStar)`
  fill: currentColor;
  margin: 0 2px;
  border-radius: 50%;
  background: #eee;
`;
