import Shimmer from "./Shimmer";
import ResCard, { withOffLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SWI_API } from "../Utils/constants";
import { useOnlineStatus } from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  const [searchText, setSearchText] = useState(" ");

  const RestaurantOffLabel = withOffLabel(ResCard);

  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWI_API);

    const json = await data.json();

    const rest =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestuarants(rest);
    setFilteredRestuarants(rest);
  };

  if (status === false) return <h1>looks like you are offline </h1>;

  if (listOfRestuarants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex p-4">
        <div className="filter-btn p-4">
          <div className="search m-4 p-4">
            <input
              type="search"
              className="border border-solid to-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="bg-pink-500 m-4 text-white shadow-md rounded-lg"
              onClick={() => {
                const filteredRestuarants = listOfRestuarants.filter((res) =>
                  res.info.name
                    .trim()
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase())
                );

                setFilteredRestuarants(filteredRestuarants);
              }}
            >
              search
            </button>
            <button
              className="bg-pink-500 m-4 text-white shadow-md rounded-lg"
              onClick={() => {
                const filteredList = listOfRestuarants.filter(
                  (x) => x.info.avgRating > 4.3
                );
                setListOfRestuarants(filteredList);
              }}
            >
              {" "}
              Filter rating{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="res-container flex flex-wrap	">
        {filteredRestuarants.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
          >
            <ResCard key={restuarant.info.id} resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
