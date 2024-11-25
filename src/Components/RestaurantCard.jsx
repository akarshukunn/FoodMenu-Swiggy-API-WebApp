import { CDN_URL } from "../Utils/constants";

const ResCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card m-4 p-4 w-52 border border-solid border-r-fuchsia-200 rounded-lg bg-fuchsia-100 shadow-md hover:bg-slate-300">
      <img
        className="card-img h-52 rounded-md"
        alt="card-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export const withOffLabel = (ResCard) => {
  return () => {
    return (
      <div>
        {header} {subHeader}
        <ResCard />
      </div>
    );
  };
};

export default ResCard;
