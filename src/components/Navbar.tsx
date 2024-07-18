import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className=" shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-primary">DeliCook</span>
          </div>

          {/* Right side navigation links and profile avatar */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
            <Link
              to="/recipe"
              className="inline-flex items-center px-2 pt-1 text-sm font-medium text-black hover:text-primary"
            >
              Recipe Recommendation
            </Link>
            <Link
              to="/inventory"
              className="inline-flex items-center px-2 pt-1 text-sm font-medium text-black hover:text-primary"
            >
              Ingredient Inventory
            </Link>
            <Link
              to="/meal-planning"
              className="inline-flex items-center px-2 pt-1 text-sm font-medium text-black hover:text-primary"
            >
              Meal Planning
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center px-2 pt-1 text-sm font-medium text-black hover:text-primary"
            >
              Community
            </Link>
            <div className="flex items-center">
              <div className="ml-4 relative">
                <div>
                  <button
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User profile"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
