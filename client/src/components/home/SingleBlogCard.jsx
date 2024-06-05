import React from 'react';
import {Link }  from "react-router-dom"
const SingleBlogCard = ({blog}) => {
  return (
    <div className="lg:flex gap-8 justify-center mb-12  items-center">
      <div>
        <img
          className="w-96 relative flex-1 object-contain"
          src={blog?.image}
          alt=""
        />
      </div>
      <div className="lg:flex-1 ">
        <div className=" mt-6">
          <span className="inline-block px-2 py-1 mr-2 rounded-lg text-center bg-blue-600 text-white font-medium">
            {blog?.category}
          </span>
          <span>Publish Date : {blog?.published_date}</span>
        </div>
        <h2 className="text-xl mt-2 font-bold mb-4">{blog.title}</h2>
        <p className="text-lg font-">{blog?.content}</p>
        <Link to="/" className="  font-bold border-b border-blue-700 ">
          Read More ...
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogCard;