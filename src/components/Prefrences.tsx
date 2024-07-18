import React, { useState } from "react";

const Preferences: React.FC = () => {
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergies, setAllergies] = useState("");
  const [tastePreference, setTastePreference] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [time, setTime] = useState("");
  const [typeOfFood, setTypeOfFood] = useState("");

  const dietaryOptions = [
    "Vegan",
    "Vegetarian",
    "Gluten-Free",
    "Keto",
    "Paleo",
  ];
  const allergyOptions = [
    "Peanuts",
    "Dairy",
    "Gluten",
    "Shellfish",
    "Eggs",
    "Soy",
  ];
  const tasteOptions = ["Italian", "Chinese", "Mexican", "Indian", "Japanese"];
  const foodTypes = ["Meal", "Snack", "Dessert", "Beverage", "Appetizer"];
  const timeOptions = [
    "Less than 15 minutes",
    "15-30 minutes",
    "30-60 minutes",
    "More than 60 minutes",
  ];

  const handleSavePreferences = () => {
    // You can implement logic here to save preferences
    // For now, we'll just log them to the console
    console.log("Saved Preferences:", {
      dietaryPreference,
      allergies,
      tastePreference,
      cuisine,
      time,
      typeOfFood,
    });

    // Redirect logic can be added here using React Router or other methods
    // For simplicity, we'll assume a basic redirect after saving preferences
    alert("Preferences saved! Redirecting...");
    // Replace with actual redirect logic as needed
    // window.location.href = '/preference-page';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#FF4A22" }}
        >
          User Preferences
        </h2>
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Dietary Preferences
              </label>
              <div className="flex flex-wrap mt-2">
                {dietaryOptions.map((option, index) => (
                  <label key={index} className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      className="form-radio text-primary focus:ring-primary"
                      value={option}
                      checked={dietaryPreference === option}
                      onChange={() => setDietaryPreference(option)}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Allergies
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm mt-2"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Taste Preferences
              </label>
              <select
                value={tastePreference}
                onChange={(e) => setTastePreference(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm mt-2"
              >
                <option value="">Select Taste Preference</option>
                {tasteOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Cuisine
              </label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm mt-2"
              >
                <option value="">Select Cuisine</option>
                {foodTypes.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm mt-2"
              >
                <option value="">Select Time</option>
                {timeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Type of Food
              </label>
              <select
                value={typeOfFood}
                onChange={(e) => setTypeOfFood(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm mt-2"
              >
                <option value="">Select Type of Food</option>
                {foodTypes.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSavePreferences}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-4"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preferences;
