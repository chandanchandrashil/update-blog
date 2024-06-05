import React from 'react';
import {Link} from "react-router-dom"
const ManageBlogCard = ({ blog }) => {
  const handleDelete = () => {
    alert("This Feature upcoming!")
  }
  return (
    <div>
      <div className="card w-72  mb-4 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {blog.category}
            <div className="badge badge-secondary">New</div>
          </h2>
          <p>{blog.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <Link to={`/dashboard/edit-blog/${blog._id}`}>Edit</Link>
            </div>
            <div onClick={handleDelete} className="badge badge-outline">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;