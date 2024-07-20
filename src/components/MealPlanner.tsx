// src/MealPlanner.tsx

import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { DateClickArg } from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./stlye.css";

const initialRecipes = [
  { id: "1", title: "Pancakes" },
  { id: "2", title: "Caesar Salad" },
  { id: "3", title: "Spaghetti Bolognese" },
  { id: "4", title: "Fruit Smoothie" },
];

interface Recipe {
  id: string;
  title: string;
}

const MealPlanner: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [draggingRecipe, setDraggingRecipe] = useState<Recipe | null>(null);
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().batchRendering(() => {
        events.forEach((event) => {
          calendarRef.current?.getApi().addEvent(event);
        });
      });
    }
  }, [events]);

  const handleDateClick = (info: DateClickArg) => {
    const mealType = prompt(
      "Enter meal type (Breakfast, Lunch, Dinner, Snacks):"
    );
    const mealRecipe = prompt("Enter the recipe:");

    if (mealType && mealRecipe) {
      const newEvent: EventInput = {
        title: `${mealType}: ${mealRecipe}`,
        start: info.dateStr,
        allDay: true,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleRecipeDragStart = (recipe: Recipe) => {
    setDraggingRecipe(recipe);
  };

  const handleCalendarDrop = (info: { date: Date; draggedEl: HTMLElement }) => {
    if (draggingRecipe) {
      const newEvent: EventInput = {
        title: draggingRecipe.title,
        start: info.date,
        allDay: true,
      };
      setEvents([...events, newEvent]);
      setDraggingRecipe(null);
    }
  };

  return (
    <div className="meal-planner">
      <div className="w-3/4 pr-4">
        <h1 className="text-3xl font-bold mb-4">Weekly Meal Planner</h1>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridWeek"
          dateClick={handleDateClick}
          events={events}
          droppable={true}
          eventReceive={(info) => {
            handleCalendarDrop({ date: info.date, draggedEl: info.draggedEl });
          }}
        />
      </div>
      <div className="w-1/4 pl-4">
        <h2 className="text-2xl font-bold mb-2">Recipes</h2>
        <div className="space-y-2">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-blue-500 text-white p-2 rounded shadow cursor-pointer"
              draggable
              onDragStart={() => handleRecipeDragStart(recipe)}
            >
              {recipe.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
