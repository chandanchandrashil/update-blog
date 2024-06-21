import React from "react";
import SingleBlogCard from "./SingleBlogCard";
import Pagination from "./Pagination";


const BlogCardList = ({blogs}) => {
  return (
    <div className="lg:w-2/3 w-full border-r-[1px]  rounded p-16 ">
      <h1 className="text-4xl sm:font-bold font-bold my-12 mr-auto ml-auto ">
        Recent Posts
      </h1>
      <div>
        {blogs?.slice(0, 6).map((blog) => (
          <SingleBlogCard key={blog._id} blog={blog} />
        ))}

        <div className="">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default BlogCardList;
