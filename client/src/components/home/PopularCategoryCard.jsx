import React from "react";
import {Link} from "react-router-dom"
const PopularCategoryCard = ({ name, backgroundColor }) => {
  return (
    <div
      className={` xl:h-52 lg:h-48  md:h-44 sm:h-32 flex justify-center items-center rounded-lg p-4 mb-4 text-center   ${backgroundColor}`}
    >
      <Link className="text-black hover:underline font-semibold xl:text-2xl lg:text-2xl text-xl" to="/">
        {name}
      </Link>
    </div>
  );
};

export default PopularCategoryCard;
