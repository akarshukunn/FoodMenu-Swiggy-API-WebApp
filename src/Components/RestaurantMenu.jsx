import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_ID } from "../Utils/constants";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resMenu === null) return <Shimmer />;

  const {
    name,
    avgRating,
    city,
    areaName,
    locality,
    cuisines,
    costForTwoMessage,
  } = resMenu?.cards[2]?.card?.card?.info;

  const menuCard =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categaories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="Menu text-center  bg-slate-200 content-center	">
      <h1 className="font-extrabold text-2xl my-6">{name}</h1>
      <h4>
        {city}, {areaName}, {locality}
      </h4>
      <h4>Cost {costForTwoMessage}</h4>
      <h4>Rating {avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      {categaories.map((c, index) => (
        <RestaurantCategory
          key={c.card.card.title}
          data={c.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
