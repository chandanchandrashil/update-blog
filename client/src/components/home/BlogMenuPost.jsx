import React from 'react';
import {Link} from "react-router-dom"
const BlogMenuPost = () => {
  return (
    <div className="flex items-center gap-4 mb-4 ">
      <Link to="/">
        <div className="flex-1">
          <span className="badge bg-green-400 text-white rounded-full px-2 py-1">
            Food
          </span>
          <h2 className="text-gl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <div>
            <span>Chan Dan</span> <span>06/06/2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogMenuPost;