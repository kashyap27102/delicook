type Ingredient = {
  name: string;
  quantity: number;
  image: string;
};

type Recipe = {
  title: string;
  ingredients: Ingredient[];
};

type DayPlan = {
  day: string;
  meals: {
    slot: string;
    recipe: Recipe;
  }[];
};

export const dummyData: DayPlan[] = [
  {
    day: "Monday",
    meals: [
      {
        slot: "Breakfast",
        recipe: {
          title: "Scrambled Eggs",
          ingredients: [
            {
              name: "Eggs",
              quantity: 2,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Milk",
              quantity: 50,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Salt",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Pepper",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
          ],
        },
      },
      {
        slot: "Lunch",
        recipe: {
          title: "Chicken Salad",
          ingredients: [
            {
              name: "Chicken Breast",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Lettuce",
              quantity: 50,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Tomatoes",
              quantity: 2,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Cucumber",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
          ],
        },
      },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      {
        slot: "Breakfast",
        recipe: {
          title: "Oatmeal",
          ingredients: [
            {
              name: "Oats",
              quantity: 50,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Milk",
              quantity: 50,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Honey",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Banana",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
          ],
        },
      },
      {
        slot: "Dinner",
        recipe: {
          title: "Grilled Salmon",
          ingredients: [
            {
              name: "Salmon",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Lemon",
              quantity: 1,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Asparagus",
              quantity: 6,
              image: "https://via.placeholder.com/50x50",
            },
            {
              name: "Olive Oil",
              quantity: 20,
              image: "https://via.placeholder.com/50x50",
            },
          ],
        },
      },
    ],
  },
];
