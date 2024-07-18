import React from "react";

interface IngredientControlProps {
  name: string;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const IngredientControl: React.FC<IngredientControlProps> = ({
  name,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <div className="flex items-center">
        <button
          onClick={() => onQuantityChange(quantity - 1)}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
        >
          -
        </button>
        <span className="px-4 text-sm font-medium text-gray-900">
          {quantity}
        </span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IngredientControl;
