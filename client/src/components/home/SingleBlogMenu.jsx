import React from 'react';

const SingleBlogMenu = ({blog}) => {
  return (
    <div className="flex items-center gap-4 mb-4 ">
      <div className="flex:1   ">
        <img
          className=" border-2   w-24 relative object-cover  "
          src={blog?.image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <span className="badge bg-green-400 text-white rounded-full px-2 py-1">
          {blog?.category}
        </span>
        <h2 className="text-gl font-semibold">{blog?.title}</h2>
        <div>
          <span>{blog.author_name}</span> <span>{blog.published_date}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogMenu;