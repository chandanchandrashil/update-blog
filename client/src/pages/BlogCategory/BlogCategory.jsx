import React from 'react';
import BlogCardList from '../../components/home/BlogCardList';
import BlogMenu from '../../components/home/BlogMenu';

const BlogCategory = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Category Page</h1>
      <div className="flex gap-12">
        <BlogCardList />
        <BlogMenu/>
      </div>
    </div>
  );
};

export default BlogCategory;