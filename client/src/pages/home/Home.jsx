import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../../components/home/Hero";
import FeaturedBlog from "../../components/home/FeaturedBlog";
import PopularCategory from "../../components/home/PopularCategory";
import BlogCardList from "../../components/home/BlogCardList";
import BlogMenu from "../../components/home/BlogMenu";

const Home = () => {
  const blogsData = useLoaderData();
  const [blogs, setBlogs] = useState(blogsData);

  console.log(blogs);

  return (
    <div>
      <Hero />
      <FeaturedBlog />
      <PopularCategory />
      <div className=" lg:flex md:flex  lg:gap-12 md:gap-4">
        <BlogCardList blogs={blogs} />
        <BlogMenu blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
