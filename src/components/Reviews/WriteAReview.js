import React, { useState } from "react";
import { RatingStar } from "../Reviews/RatingStar";
import styled from "styled-components";
import { Button } from "../UIElements/Button";
import { TextArea } from "../UIElements/TextArea";
import { Input } from "../UIElements/Input";
import { useDispatch } from "react-redux";
import { addReview } from "../../actionCreators";

// Would normally extract logic to a container, but it's taking a lot of time...

export const WriteAReview = ({
  productId,
  onSubmitForm = () => {},
  closeWindow,
}) => {
  const initialState = {
    rating: null,
    title: "",
    review: "",
    user: "",
  };
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState(initialState);

  const onMouseLeave = () => setHoverRating(review.rating || 0);
  const onMouseEnter = (value) => () => setHoverRating(value);
  const dispatch = useDispatch();

  const onClickRating = (rating) => () => setReview({ ...review, rating });
  const onChangeText = (event) =>
    setReview({ ...review, review: event.target.value });
  const onChangeUser = (event) =>
    setReview({ ...review, user: event.target.value });
  const onChangeTitle = (event) =>
    setReview({ ...review, title: event.target.value });

  const clearForNewReview = () => setReview(initialState);

  const onSubmit = () => {
    // adding a timestamp for uniqueness
    dispatch(
      addReview({ productId, review: { ...review, timestamp: Date.now() } })
    );
    clearForNewReview();
    closeWindow();
  };

  return (
    <>
      <FormContainer onClick={closeWindow} />
      <Content>
        <CloseWindow onClick={closeWindow}>X</CloseWindow>
        <h2>Schrijf je review</h2>
        <InputContainer>
          <strong>Geef je aantal sterren:</strong>
          <RatingContainer>
            <StyledRatingStar
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter(10)}
              onClick={onClickRating(10)}
              canHover={true}
              fillMe={hoverRating >= 10 || review.rating >= 10}
            />
            <StyledRatingStar
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter(20)}
              onClick={onClickRating(20)}
              canHover={true}
              fillMe={hoverRating >= 20 || review.rating >= 20}
            />
            <StyledRatingStar
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter(30)}
              onClick={onClickRating(30)}
              canHover={true}
              fillMe={hoverRating >= 30 || review.rating >= 30}
            />
            <StyledRatingStar
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter(40)}
              onClick={onClickRating(40)}
              canHover={true}
              fillMe={hoverRating >= 40 || review.rating >= 40}
            />
            <StyledRatingStar
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter(50)}
              onClick={onClickRating(50)}
              canHover={true}
              fillMe={hoverRating >= 50 || review.rating >= 50}
            />
          </RatingContainer>
          <div>
            <InputContainer>
              <label>
                <strong>Titel van jouw review</strong>
                <Input
                  required
                  type="text"
                  placeholder="Titel van je review"
                  onChange={onChangeTitle}
                />
              </label>
            </InputContainer>
            <InputContainer>
              <label>
                <strong>Je gebruikersnaam</strong>
                <Input
                  required
                  type="text"
                  placeholder="Jouw gebruiikersnaam"
                  onChange={onChangeUser}
                />
              </label>
            </InputContainer>
            <InputContainer>
              <label>
                <strong>Vertel ons wat je van het product vind</strong>
                <TextArea
                  required
                  placeholder="Schrijf je review"
                  onChange={onChangeText}
                />
              </label>
            </InputContainer>
          </div>
          <ButtonContainer>
            <Button onClick={onSubmit} type="button">
              Verstuur review
            </Button>
          </ButtonContainer>
        </InputContainer>
      </Content>
    </>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  padding-top: 16px;
`;

const RatingContainer = styled.div`
  height: 30px;
  margin: 8px 0;
`;

const StyledRatingStar = styled(RatingStar)`
  height: 30px;
  background: #ddd;
  color: white;
  background: ${({ fillMe }) => (fillMe ? "#f55" : "#ddd")};
  border-radius: 50%;
  cursor: pointer;
  margin: 0 2px;

  &:hover {
    background: #f55;
  }
`;

const CloseWindow = styled.span`
  font-size: 32px;
  color: #aaa;
  cursor: pointer;
  float: right;

  &:hover {
    color: #000;
  }
`;

const Content = styled.div`
  width: 60%;
  min-width: 500px;
  margin: 0 auto;
  background: #fff;
  padding: 32px;
  border-radius; 2px;
  top: 10%;
  left: 50%;
  position: fixed;
  transform: translate(-50%);
  box-shadow: 0 0 32px rgba(0,0,0, 0.2);
`;

const InputContainer = styled.div`
  margin: 16px 0;

  label {
    display: flex;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  position: fixed;
  z-index: 0;
  background: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;
