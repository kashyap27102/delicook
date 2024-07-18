import React, { useState } from "react";

const RecipeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const timeSlots = ["Breakfast", "Lunch", "Snacks", "Dinner"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto z-20">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Add Recipe</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label
                htmlFor="searchRecipe"
                className="block text-sm font-medium text-gray-700"
              >
                Search Recipe
              </label>
              <input
                type="text"
                id="searchRecipe"
                name="searchRecipe"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Search recipe..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Choose Time Slot
              </label>
              <div className="mt-2 flex flex-wrap">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`mr-2 mb-2 px-4 py-2 rounded-full text-sm font-medium focus:outline-none transition ${
                      selectedSlot === slot
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-primary hover:bg-opacity-80 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 ease-in-out"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
