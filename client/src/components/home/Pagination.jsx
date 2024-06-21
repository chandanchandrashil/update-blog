import React from "react";

const Pagination = () => {
  return (
    <nav className="">
      <ul className=" flex justify-between font-semibold">
        <li>
          <button className="px-4 py-2 bg-blue-600 text-white border  rounded-md ">
            Previous
          </button>
        </li>
        <li>
          <button className="px-4 py-2 bg-blue-600 text-white border-  rounded-md ">
            ... Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
