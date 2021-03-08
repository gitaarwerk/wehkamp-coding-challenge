import { writeReview } from "../writeReview";

const initial = {
  productReviews: [
    {
      productId: 1,
      rating: 10,
      amountOfReviews: 1,
      reviews: [
        {
          title: "Mooi dingetje!",
          timestamp: 1,
          rating: 10,
          user: "Gitaarwerk",
          review:
            "Heb deze in jauari gekocht bij Wehkamp. Snel bezorgd en staat nu heerlijk te shinen in het kozijn. Mijn buurman is jaloers, want deze glimt nog mooier dan zijn zuurverdiende gouden tanden!, helaas was 'ie zo jaloers ddat hij de vaas kapot heeft geslagen. Dus vind ik de 225,- wel een beetje duur om deze opnieuw aan te schaffen.",
        },
      ],
    },
  ],
};

test("maps a new review into state for a product that has already gotten a reviews.", () => {
  const payload = {
    productId: 1,
    review: {
      rating: 20,
      timestamp: 1,
      user: "Someone from Wehkamp",
      review:
        "Mooi vaasje, beetje klein voor het geld. Weet niet of ik het de 299 euries waard vind. Ja toch...",
      title: "Vind het wel rededlijk... ",
    },
  };

  const expected = {
    productReviews: [
      {
        productId: 1,
        rating: 15,
        amountOfReviews: 2,
        reviews: [
          {
            title: "Mooi dingetje!",
            timestamp: 1,
            rating: 10,
            user: "Gitaarwerk",
            review:
              "Heb deze in jauari gekocht bij Wehkamp. Snel bezorgd en staat nu heerlijk te shinen in het kozijn. Mijn buurman is jaloers, want deze glimt nog mooier dan zijn zuurverdiende gouden tanden!, helaas was 'ie zo jaloers ddat hij de vaas kapot heeft geslagen. Dus vind ik de 225,- wel een beetje duur om deze opnieuw aan te schaffen.",
          },
          {
            rating: 20,
            user: "Someone from Wehkamp",
            timestamp: 1,
            review:
              "Mooi vaasje, beetje klein voor het geld. Weet niet of ik het de 299 euries waard vind. Ja toch...",
            title: "Vind het wel rededlijk... ",
          },
        ],
      },
    ],
  };

  const result = writeReview(
    initial.productReviews,
    payload.productId,
    payload.review
  );
  expect(result).toEqual(expected);
});

test("maps a new review into state for a product that has no reviews yet", () => {
  const payload = {
    productId: 1,
    review: {
      rating: 20,
      timestamp: 1,
      user: "Someone from Wehkamp",
      review:
        "Mooi vaasje, beetje klein voor het geld. Weet niet of ik het de 299 euries waard vind. Ja toch...",
      title: "Vind het wel rededlijk... ",
    },
  };

  const expected = {
    productReviews: [
      {
        productId: 1,
        rating: 20,
        amountOfReviews: 1,
        reviews: [
          {
            rating: 20,
            timestamp: 1,
            user: "Someone from Wehkamp",
            review:
              "Mooi vaasje, beetje klein voor het geld. Weet niet of ik het de 299 euries waard vind. Ja toch...",
            title: "Vind het wel rededlijk... ",
          },
        ],
      },
    ],
  };

  const result = writeReview([], payload.productId, payload.review);
  expect(result).toEqual(expected);
});
