import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShare } from "@fortawesome/free-solid-svg-icons";

// Dummy data for demonstration
const dummyRecipe = {
  title: "Grilled Salmon",
  userProfile: {
    name: "John Doe",
    profileImage: "https://via.placeholder.com/50",
  },
  datePosted: "July 17, 2024",
  cookTime: "30 minutes",
  category: "Non-Vegan",
  image: "https://via.placeholder.com/800x600",
  nutritionalInfo: {
    calories: 350,
    carbs: 10,
    protein: 25,
    fat: 20,
  },
  ingredients: [
    { name: "Salmon fillet", quantity: "1", unit: "piece" },
    { name: "Olive oil", quantity: "2", unit: "tbsp" },
    { name: "Salt", quantity: "1/2", unit: "tsp" },
    { name: "Pepper", quantity: "1/2", unit: "tsp" },
  ],
  directions: `1. Preheat grill to medium-high heat.
2. Brush salmon fillets with olive oil, and season with salt and pepper.
3. Place salmon on the grill, and cook for 6 to 8 minutes per side, or until fish flakes easily with a fork.
4. Serve hot.`,
};

const RecipePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        {/* Title, User Profile, Date, Cook Time, Category */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {dummyRecipe.title}
          </h1>
          <div className="flex items-center mt-2">
            <img
              src={dummyRecipe.userProfile.profileImage}
              alt={dummyRecipe.userProfile.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <p className="text-gray-700">{dummyRecipe.userProfile.name}</p>
            <p className="text-gray-500 ml-2">{dummyRecipe.datePosted}</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-gray-700">{dummyRecipe.cookTime}</p>
            <div className="flex items-center ml-4">
              <span className="text-gray-700">{dummyRecipe.category}</span>
              {/* Replace with appropriate icons */}
              {dummyRecipe.category === "Vegan" ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="ml-2 text-green-500"
                />
              ) : (
                <FontAwesomeIcon icon={faShare} className="ml-2 text-red-500" />
              )}
            </div>
          </div>
        </div>
        {/* Bookmark and Share Buttons */}
        <div className="flex">
          <button className="text-gray-500 hover:text-gray-700 mr-4">
            <FontAwesomeIcon icon={faBookmark} className="text-xl" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faShare} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Recipe Photo and Nutritional Information */}
      <div className="mb-8 flex">
        {/* Recipe Photo */}
        <div className="mr-8">
          <img
            src={dummyRecipe.image}
            alt={dummyRecipe.title}
            className="rounded-lg shadow-md"
          />
        </div>
        {/* Nutritional Information */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Nutritional Information
          </h2>
          <div className="flex mb-2">
            <p className="text-gray-700 mr-4">
              Calories: {dummyRecipe.nutritionalInfo.calories}
            </p>
            <p className="text-gray-700 mr-4">
              Carbs: {dummyRecipe.nutritionalInfo.carbs}g
            </p>
          </div>
          <div className="flex">
            <p className="text-gray-700 mr-4">
              Protein: {dummyRecipe.nutritionalInfo.protein}g
            </p>
            <p className="text-gray-700 mr-4">
              Fat: {dummyRecipe.nutritionalInfo.fat}g
            </p>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
        <ul className="list-inside flex gap-2 flex-wrap">
          {dummyRecipe.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className=" w-fit rounded-full text-white bg-primary px-4 py-2"
            >
              {ingredient.quantity} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Directions Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Directions</h2>
        <p className="text-gray-700">{dummyRecipe.directions}</p>
      </div>
    </div>
  );
};

export default RecipePage;
