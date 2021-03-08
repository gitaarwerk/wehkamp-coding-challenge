import styled from "styled-components";
import { ReviewStarContainer } from "../Reviews/ReviewStarContainer";
import { Button } from "../UIElements/Button";
import React, { Fragment, useState } from "react";
import { ReviewsContainer } from "../Reviews/ReviewsContainer";
import { WriteAReview } from "../Reviews/WriteAReview";
import { TextLink } from "../UIElements/TextLink";

export const Product = ({ productId }) => {
  const [isWriteWindowOpen, setIsWriteWindowOpen] = useState(false);
  const openWindow = () => setIsWriteWindowOpen(true);
  const closeWindow = () => setIsWriteWindowOpen(false);

  return (
    <>
      <Container>
        <ProductContainer>
          <LeftContainer>
            <Image src="/assets/product.webp" width={300} />
            <ProductDescription>
              <p>
                Deze hoge NUDE Layers vaas is ideaal voor kleine bloemstukken,
                maar is evengoed geschikt om leeg tentoongesteld te worden,
                zodat de sculpturale kwaliteiten volledig tot hun recht komen.
                Dit lange, perfect geproportioneerde stuk is gegoten van
                loodvrij kristal met een gouden coating en kan worden
                gecombineerd met andere vaten uit de collectie, ontworpen om in
                elkaar te passen voor een uniek kleureffect.
              </p>
              <ProductUSPs>
                <ProductUSP>Limited edition</ProductUSP>
                <ProductUSP>138 mm / 326 mm</ProductUSP>
                <ProductUSP>Handmade</ProductUSP>
                <ProductUSP>Loodvrij crystal</ProductUSP>
              </ProductUSPs>
            </ProductDescription>
          </LeftContainer>
          <RightContainer>
            <PageHeading>Layers Vase Tall Gold Limited</PageHeading>
            <StyledReviewStarContainer
              productId={productId}
              openWindow={openWindow}
            />

            <Price>299,99</Price>
            <StockStatus>Op voorraad</StockStatus>
            <StyledButton
              type="button"
              title="Voeg toe Layers Vase Tall Gold Limited aan je winkelmandje"
            >
              In winkelmandje
            </StyledButton>
          </RightContainer>
        </ProductContainer>
        <ReviewSection productId={productId}>
          <h2>Reviews van de Layers Vase Tall Gold Limited</h2>
          <TextLink onClick={openWindow}> Schrijf een review</TextLink>
          <ReviewsContainer productId={productId} />
        </ReviewSection>
      </Container>
      {isWriteWindowOpen && (
        <WriteAReview closeWindow={closeWindow} productId={productId} />
      )}
    </>
  );
};

const StyledReviewStarContainer = styled(ReviewStarContainer)`
  margin: 16px 0;
`;

const PageHeading = styled.h1`
  margin: 8px 0;
`;

const ReviewSection = styled.div`
  margin-top: 32px;
`;

const Image = styled.img`
  max-width: 100%;
  width: calc(40vw - 32px);
`;

const ProductUSPs = styled.ul`
  margin: 16px 20px;
`;

const ProductUSP = styled.li`
  margin: 4px 0;
`;

const Container = styled.div`
  flex-direction: row;
  max-width: 80vw;
  margin: 0 auto;
  position: relative;
`;

const ProductDescription = styled.div`
  margin-top: 16px;
`;

const ProductContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  position: relative;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const StockStatus = styled.div`
  color: green;
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 8px;
`;

const LeftContainer = styled.div`
  width: 40vw;
  margin-right: 0;
  padding-right: 32px;
`;
