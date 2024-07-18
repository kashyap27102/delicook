import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./components/Login.tsx";
import App from "./App.tsx";
import SignUp from "./components/Signup.tsx";
import WeeklyCalendar from "./components/WeeklyCalander.tsx";
import IngredientsDayWise from "./components/IngredientsDayWise.tsx";
import RecipeList from "./components/RecipeList.tsx";
import RecipePage from "./components/RecipePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/recipe",
        element: <RecipeList />,
      },
      {
        path: "/recipe/:id",
        element: <RecipePage />,
      },
      {
        path: "/meal-planning",
        element: <WeeklyCalendar />,
      },
      {
        path: "/inventory",
        element: <IngredientsDayWise />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
