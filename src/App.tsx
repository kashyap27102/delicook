import "./App.css";
import GlobalSearchBar from "./components/BlobalSearchBar";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import UserPreferences from "./components/UserPreferences";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default App;
