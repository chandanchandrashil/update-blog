import React from "react";
import {Link} from "react-router-dom"
const PopularCategoryCard = ({ name, backgroundColor }) => {
  return (
    <div
      className={`rounded-lg p-4 mb-4 text-center text-white font-medium shadow-md ${backgroundColor}`}
    >
      <Link to="/">{name}</Link>
    </div>
  );
};

export default PopularCategoryCard;
