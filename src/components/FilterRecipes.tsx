import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const HorizontalFilterBar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white overflow-hidden">
      <div className="flex flex-wrap px-4 py-3 justify-between">
        <div className="relative w-full sm:w-auto flex-shrink-0 sm:flex-grow-0 sm:mr-4 mb-3 sm:mb-0">
          <label
            htmlFor="cuisine"
            className="block text-sm font-medium text-primary mb-1"
          >
            Cuisine
          </label>
          <select
            id="cuisine"
            name="cuisine"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select Cuisine...</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="mexican">Mexican</option>
            <option value="indian">Indian</option>
            <option value="japanese">Japanese</option>
          </select>
        </div>
        <div className="relative w-full sm:w-auto flex-shrink-0 sm:flex-grow-0 sm:mr-4 mb-3 sm:mb-0">
          <label
            htmlFor="difficulty"
            className="block text-sm font-medium text-primary mb-1"
          >
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select Difficulty...</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="relative w-full sm:w-auto flex-shrink-0 sm:flex-grow-0 sm:mr-4 mb-3 sm:mb-0">
          <label
            htmlFor="preparationTime"
            className="block text-sm font-medium text-primary mb-1"
          >
            Preparation Time
          </label>
          <select
            id="preparationTime"
            name="preparationTime"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select Time...</option>
            <option value="15">Less than 15 minutes</option>
            <option value="30">15-30 minutes</option>
            <option value="60">30-60 minutes</option>
            <option value="60+">More than 60 minutes</option>
          </select>
        </div>
        <div className="relative w-full sm:w-auto flex-shrink-0 sm:flex-grow-0">
          <label
            htmlFor="dietaryRestrictions"
            className="block text-sm font-medium text-primary mb-1"
          >
            Dietary Restrictions
          </label>
          <div className="flex flex-wrap">
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">Vegan</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">Vegetarian</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">Gluten-Free</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">Keto</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">Paleo</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end px-4 py-3 gap-2">
          <button className="bg-primary hover:bg-opacity-80 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 ease-in-out">
            Apply Filters
          </button>
          <button className="text-primary hover:text-primary-dark focus:outline-none border-2 border-primary rounded-md px-4 py-2">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalFilterBar;
