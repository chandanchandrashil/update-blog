import React from 'react';
import { Link } from "react-router-dom";
const CategoryListLinks = ({item}) => {
  return (
    <div className="mb-2">
      <Link
        to="/"
        className="text-gray-700  hover:text-gray-900 px-3 py-1 rounded-md bg-blue-200 hover:bg-blue-400 font-medium"
      >
      {item?.title}
      </Link>
    </div>
  );
};

export default CategoryListLinks;