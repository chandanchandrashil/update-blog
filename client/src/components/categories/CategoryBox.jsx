import React from "react";

const CategoryBox = ({ label, icon: Icon,  }) => {
  return (
    <div
      className=" flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        shadow
        p-3
        border
        hover:text-neutral-800
        transition
        cursor-pointer"
    >
      <Icon size={28} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
