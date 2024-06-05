import React from 'react';

const SingleBlogMenu = () => {
  return (
    <div className="flex items-center gap-4 mb-4 ">
      <div className="flex:1   ">
        <img
          className=" border-2   w-24 relative object-cover  "
          src="https://images.pexels.com/photos/24816519/pexels-photo-24816519/free-photo-of-sintra-national-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
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
    </div>
  );
};

export default SingleBlogMenu;