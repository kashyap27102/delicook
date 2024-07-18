import React from "react";
import { dummyData } from "./dummy";
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

const data: DayPlan[] = dummyData;

const IngredientsDayWise: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {dummyData.map((dayPlan) => (
        <div key={dayPlan.day} className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {dayPlan.day}
            </h3>
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Send Order
            </button>
          </div>
          {dayPlan.meals.map((meal) => (
            <div key={meal.slot} className="mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {meal.recipe.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md flex justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {ingredient.name}
                        </p>
                        <p className="text-gray-600">
                          Quantity: {ingredient.quantity}
                        </p>
                        {/* Placeholder for quantity control */}
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none">
                        -
                      </button>
                      <span className="px-4 text-sm font-medium text-gray-900">
                        {ingredient.quantity}
                      </span>
                      <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IngredientsDayWise;
