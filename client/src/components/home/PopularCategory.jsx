import React from 'react';

import PopularCategoryCard from './PopularCategoryCard';
const PopularCategory = () => {
  const colors = [
    "bg-blue-200",
    "bg-green-300",
    "bg-orange-200",
    "bg-blue-300",
    "bg-green-200",
    "bg-orange-300",
  ];
  const categories = [
    "Gaming",
    "Fashion",
    "Sports ",
    "Lifestyle",
    "Travel",
    "Education" /* Add more */,
  ];
  return (
    <div className="sm:my-10 md:my-12 lg:my-16">
      <div>
        <h1 className="text-4xl sm:font-bold font-bold ">
          Popular Category
        </h1>
      </div>
      <div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-8 sm:gap-4 md:gap-4 lg:gap-6">
          {categories?.map((name, index) => (
            <PopularCategoryCard
              key={name}
              name={name}
              backgroundColor={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;