import React from "react";
import { CDN_URL } from "../Utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-4  border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>{" "}
              <span>
                {" "}
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 justify-end">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-white shadow-lg absolute">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
