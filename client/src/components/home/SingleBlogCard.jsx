import React from 'react';
import {Link }  from "react-router-dom"
const SingleBlogCard = () => {
  return (
    <div className="flex gap-8 justify-center mb-12 items-center">
      <div>
        <img
          className="w-96 relative flex-1 object-contain"
          src="https://images.pexels.com/photos/24816519/pexels-photo-24816519/free-photo-of-sintra-national-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="flex-1">
        <div>
          <span className="inline-block px-2 py-1 mr-2 rounded-lg text-center bg-blue-600 text-white font-medium">
            Coding
          </span>
          <span>Publish Date : 12/05/2024</span>
        </div>
        <h2 className="text-xl mt-2 font-bold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          blanditiis hic perspiciatis.
        </h2>
        <p className="text-lg font-">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          perspiciatis iure voluptatum sunt delectus voluptatibus repellat nihil
          eos dicta assumenda officia cumque aspernatur voluptate ex error magni
          tempore, magnam mollitia aliquam eligendi.
        </p>
        <Link to="/" className="  font-bold border-b border-blue-700 ">
          Read More ...
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogCard;