import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 bg-slate-200 shadow-md p-4">
        <div className="flex justify-between">
          <span
            className="font-bold text-lg cursor-pointer"
            onClick={handleClick}
          >
            {data.title} ({data.itemCards.length})
          </span>
          <span>⌄</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
