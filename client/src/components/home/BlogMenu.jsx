import React from 'react';


import SingleBlogMenu from './SingleBlogMenu';
import BlogMenuPost from './BlogMenuPost';
import CategoryListLinks from './CategoryListLinks';
const BlogMenu = ({blogs}) => {
  return (
    <>
      <div className=" w-1/3">
        <div className="my-12 mr-auto ml-auto">
          <h1 className="  text-4xl sm:font-bold font-bold">Most Popular</h1>
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit.</h2>
        </div>

        <div>
          {blogs.slice(0, 10).map((blog) => (
            <SingleBlogMenu key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="my-12  ">
          <h1 className="  text-4xl sm:font-bold font-bold">Category Links</h1>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
          <CategoryListLinks />
        </div>

        <div className="my-12  ">
          <h1 className="  text-4xl sm:font-bold font-bold">Editors Picks</h1>
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit.</h2>
        </div>
        <div>
          {blogs.slice(0,10).map((blog) => (
            <BlogMenuPost key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogMenu;