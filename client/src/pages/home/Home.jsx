import React from "react";
import Hero from "../../components/home/Hero";
import FeaturedBlog from "../../components/home/FeaturedBlog";
import PopularCategory from "../../components/home/PopularCategory";
import BlogCardList from "../../components/home/BlogCardList";
import BlogMenu from "../../components/home/BlogMenu";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedBlog />
      <PopularCategory />
      <div className=" flex gap-12">
        <BlogCardList />
        <BlogMenu/>
      </div>
    </div>
  );
};

export default Home;
