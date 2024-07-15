import React from 'react';
import { categories } from "./categoriesData";
import CategoryBox from '../../components/categories/CategoryBox';

const Categories = () => {
  return (
    <div className="container mx-auto px-4">
      <h1>Category page</h1>
      <div className="pt-4 flex flex-row gap-4  items-center justify-between overflow-x-auto">
        {categories?.map((item) => (
          <CategoryBox label={item.label} icon={item.icon} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Categories;