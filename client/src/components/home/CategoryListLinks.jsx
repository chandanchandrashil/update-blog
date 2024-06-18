import React from 'react';
import { Link } from "react-router-dom";
const CategoryListLinks = ({blog}) => {
  return (
    <div className="mb-2">
      <Link
        to="/"
        className="text-gray-700  hover:text-gray-900 px-3 py-1 rounded-full bg-blue-200 hover:bg-blue-400 font-medium"
      >
      {blog?.category}
      </Link>
    </div>
  );
};

export default CategoryListLinks;