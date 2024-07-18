import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import RecipeModal from "./RecipeModal";
import WeeklyAnalysis from "./WeeklyAnalysis";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const mealSlots = ["Breakfast", "Lunch", "Snacks", "Dinner"];

const WeeklyCalendar: React.FC = () => {
  const [calendar, setCalendar] = useState(Array(7).fill(Array(4).fill(null)));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMeal = (dayIndex: number, slotIndex: number) => {
    const newCalendar = calendar.map((day, dIdx) =>
      day.map((meal: any, mIdx: any) =>
        dIdx === dayIndex && mIdx === slotIndex ? "Meal Added" : meal
      )
    );
    setCalendar(newCalendar);
  };

  return (
    <>
      <WeeklyAnalysis />
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden my-10">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">
            Weekly Meal Planner
          </h2>
          <button
            className="bg-primary text-white px-4 py-2 rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Add Meal
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4">
          {daysOfWeek.map((day, dayIndex) => (
            <div key={day} className="border rounded-lg shadow-sm bg-gray-50">
              <div className="bg-gray-200 text-black text-center py-2">
                <h3 className="text-md font-semibold">{day}</h3>
              </div>
              <div className="p-2 space-y-2">
                {mealSlots.map((slot, slotIndex) => (
                  <div
                    key={slot}
                    className="bg-white border border-dashed border-gray-400 rounded-lg shadow-sm p-2 flex justify-between items-center"
                  >
                    {calendar[dayIndex][slotIndex] ? (
                      <span className="text-gray-700">
                        {calendar[dayIndex][slotIndex]}
                      </span>
                    ) : (
                      <button
                        onClick={() => handleAddMeal(dayIndex, slotIndex)}
                        className="flex items-center text-gray-400 hover:text-opacity-80 focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        <span className="">{slot} </span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <RecipeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WeeklyCalendar;
