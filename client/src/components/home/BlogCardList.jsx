import  { useState } from "react";
import SingleBlogCard from "./SingleBlogCard";
import Pagination from "./Pagination";

const BlogCardList = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4); // Number of blogs per page

  // Logic to determine current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs?.length / blogsPerPage);

  // Function to handle next page click
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page click
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="lg:w-2/3 w-full border-r-[1px] rounded px-4">
      <h1 className="text-4xl sm:font-bold font-bold my-12 mr-auto ml-auto">
        Recent Posts
      </h1>
      <div>
        {currentBlogs?.map((blog) => (
          <SingleBlogCard key={blog._id} blog={blog} />
        ))}
        <div className="mb-0 pb-0">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCardList;
