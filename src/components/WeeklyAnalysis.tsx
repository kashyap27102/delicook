import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faFire,
  faListAlt,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";

const WeeklyAnalysis: React.FC = () => {
  const analysisData = {
    calories: 14000, // example data
    ingredients: 35, // example data
    meals: 21, // example data
    vegetables: 18, // example data
  };

  return (
    <div className="max-w-7xl mx-auto rounded-lg p-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Weekly Analysis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center p-4 border-2 border-primary text-black rounded-lg shadow">
          <FontAwesomeIcon
            icon={faFire}
            className="text-3xl text-primary mr-4"
          />
          <div>
            <p className="text-sm">Total Calories</p>
            <p className="text-xl font-semibold">
              {analysisData.calories} kcal
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 border-2 border-primary text-black rounded-lg shadow">
          <FontAwesomeIcon
            icon={faListAlt}
            className="text-3xl text-primary mr-4"
          />
          <div>
            <p className="text-sm">Ingredients Used</p>
            <p className="text-xl font-semibold">{analysisData.ingredients}</p>
          </div>
        </div>
        <div className="flex items-center p-4 border-2 border-primary text-black rounded-lg shadow">
          <FontAwesomeIcon
            icon={faAppleAlt}
            className="text-3xl text-primary mr-4"
          />
          <div>
            <p className="text-sm">Total Meals</p>
            <p className="text-xl font-semibold">{analysisData.meals}</p>
          </div>
        </div>
        <div className="flex items-center p-4 border-2 border-primary text-black rounded-lg shadow">
          <FontAwesomeIcon
            icon={faCarrot}
            className="text-3xl text-primary mr-4"
          />
          <div>
            <p className="text-sm">Vegetable Dishes</p>
            <p className="text-xl font-semibold">{analysisData.vegetables}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAnalysis;
