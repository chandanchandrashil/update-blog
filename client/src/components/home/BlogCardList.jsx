import React from "react";
import SingleBlogCard from "./SingleBlogCard";

const BlogCardList = ({blogs}) => {
  return (
    <div className="w-2/3   ">
      <h1 className="text-4xl sm:font-bold font-bold my-12 mr-auto ml-auto ">
        Recent Posts
      </h1>
      <div>
        {blogs.slice(0,10).map((blog) => (
          <SingleBlogCard key={blog._id} blog={blog} />
        ))}

        <div className="flex items-center justify-center">
          <button className="  btn border bg-blue-400 font-semibold py-4 rounded px-6">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardList;
