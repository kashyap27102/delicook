import React, { useState } from "react";

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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">User Preferences Management</h1>

      <form onSubmit={handleSubmit}>
        {/* Dietary Preferences */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Dietary Preferences</h2>
          <div className="flex flex-wrap">
            {dietaryOptions.map((option) => (
              <label key={option} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={preferences.dietary.includes(option)}
                  onChange={() => handleCheckboxChange("dietary", option)}
                />
                {option}
              </label>
            ))}
            <input
              type="text"
              placeholder="Others"
              className="border rounded-md p-2 mt-2"
              value={preferences.dietary.others || ""}
              onChange={(e) => handleInputChange("dietary", e.target.value)}
            />
          </div>
        </section>

        {/* Food Allergies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Food Allergies</h2>
          <div className="flex flex-wrap">
            {allergyOptions.map((option) => (
              <label key={option} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={preferences.allergies.includes(option)}
                  onChange={() => handleCheckboxChange("allergies", option)}
                />
                {option}
              </label>
            ))}
            <input
              type="text"
              placeholder="Others"
              className="border rounded-md p-2 mt-2"
              value={preferences.allergies.others || ""}
              onChange={(e) => handleInputChange("allergies", e.target.value)}
            />
          </div>
        </section>

        {/* Taste Preferences */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Taste Preferences</h2>
          <div>
            {tasteOptions.map((option) => (
              <div key={option} className="mb-4">
                <label className="block mb-1">{option}</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={preferences.tastePreferences[option] || 3}
                  onChange={(e) => handleSliderChange(option, e.target.value)}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Preferred Cuisines */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Preferred Cuisines</h2>
          <input
            type="text"
            placeholder="Enter your preferred cuisines"
            className="border rounded-md p-2 w-full"
            value={preferences.cuisines}
            onChange={(e) => handleInputChange("cuisines", e.target.value)}
          />
        </section>

        {/* Preparation Time */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Preparation Time</h2>
          <select
            className="border rounded-md p-2 w-full"
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
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Type of Food</h2>
          <div className="flex flex-wrap">
            {foodTypes.map((option) => (
              <label key={option} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={preferences.typeOfFood.includes(option)}
                  onChange={() => handleCheckboxChange("typeOfFood", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Save/Update
          </button>
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserPreferences;
