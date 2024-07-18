import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBookmark, faFire } from "@fortawesome/free-solid-svg-icons";

interface RecipeCardProps {
  image: string;
  title: string;
  calories: number;
  time: string;
  userName: string;
  userAvatar: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  calories,
  time,
  userName,
  userAvatar,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center mb-2 text-gray-600">
            <FontAwesomeIcon icon={faClock} className="mr-1" />
            <span>{time}</span>
          </div>
          <div className="flex items-center mb-4 text-gray-600">
            <FontAwesomeIcon icon={faFire} className="mr-1" />
            <span>{calories} Calories</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full mr-4"
              src={userAvatar}
              alt={userName}
            />

            <div className="text-sm font-medium text-gray-800">{userName}</div>
          </div>

          <button className="text-gray-600 hover:text-gray-800 ">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
