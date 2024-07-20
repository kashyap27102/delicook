import React, { useState } from "react";
import {
  FaUtensils,
  FaAllergies,
  FaHeart,
  FaGlobe,
  FaClock,
  FaList,
} from "react-icons/fa";
const UserPreferences = () => {
  const [preferences, setPreferences] = useState<any>({
    dietary: [],
    allergies: [],
    tastePreferences: {},
    cuisines: "",
    time: "",
    typeOfFood: [],
  });

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

  const handleCheckboxChange = (category: any, value: any) => {
    setPreferences((prevState: any) => ({
      ...prevState,
      [category]: prevState[category].includes(value)
        ? prevState[category].filter((item: any) => item !== value)
        : [...prevState[category], value],
    }));
  };

  const handleSliderChange = (cuisine: any, rating: any) => {
    setPreferences((prevState: any) => ({
      ...prevState,
      tastePreferences: {
        ...prevState.tastePreferences,
        [cuisine]: rating,
      },
    }));
  };

  const handleInputChange = (field: any, value: any) => {
    setPreferences((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Preferences Saved:", preferences);
    // Add your save/update logic here
  };

  const handleReset = () => {
    setPreferences({
      dietary: [],
      allergies: [],
      tastePreferences: {},
      cuisines: "",
      time: "",
      typeOfFood: [],
    });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        User Preferences
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Dietary Preferences */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <FaUtensils className="mr-2" /> Dietary Preferences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {dietaryOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={preferences.dietary.includes(option)}
                  onChange={() => handleCheckboxChange("dietary", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <input
            type="text"
            placeholder="Other dietary preferences"
            className="mt-4 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={preferences.dietary.others || ""}
            onChange={(e) => handleInputChange("dietary", e.target.value)}
          />
        </section>

        {/* Food Allergies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <FaAllergies className="mr-2" /> Food Allergies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allergyOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-red-600"
                  checked={preferences.allergies.includes(option)}
                  onChange={() => handleCheckboxChange("allergies", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <input
            type="text"
            placeholder="Other allergies"
            className="mt-4 w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={preferences.allergies.others || ""}
            onChange={(e) => handleInputChange("allergies", e.target.value)}
          />
        </section>

        {/* Taste Preferences */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <FaHeart className="mr-2" /> Taste Preferences
          </h2>
          <div className="space-y-6">
            {tasteOptions.map((option) => (
              <div key={option}>
                <label className="block mb-2">{option}</label>
                <Slider
                  min={1}
                  max={5}
                  value={preferences.tastePreferences[option] || 3}
                  onChange={(value) => handleSliderChange(option, value)}
                  className="w-full h-2 bg-gray-200 rounded-md"
                  thumbClassName="w-6 h-6 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  trackClassName="bg-blue-500 h-2 rounded-md"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Preferred Cuisines */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <FaGlobe className="mr-2" /> Preferred Cuisines
          </h2>
          <input
            type="text"
            placeholder="Enter your preferred cuisines (e.g., Italian, Chinese, Mexican)"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={preferences.cuisines}
            onChange={(e) => handleInputChange("cuisines", e.target.value)}
          />
        </section>

        {/* Preparation Time */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <FaClock className="mr-2" /> Preparation Time
          </h2>
          <select
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={preferences.time}
            onChange={(e) => handleInputChange("time", e.target.value)}
          >
            <option value="">Select time</option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </section>

        {/* Type of Food */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <FaList className="mr-2" /> Type of Food
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {foodTypes.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={preferences.typeOfFood.includes(option)}
                  onChange={() => handleCheckboxChange("typeOfFood", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserPreferences;
