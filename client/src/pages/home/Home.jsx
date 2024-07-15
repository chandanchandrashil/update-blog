import { useEffect, useState } from "react";

import BlogCardList from "../../components/home/BlogCardList";
import BlogMenu from "../../components/home/BlogMenu";
import FeaturedBlog from "../../components/home/FeaturedBlog";
import Hero from "../../components/home/Hero";
import PopularCategory from "../../components/home/PopularCategory";
import HeroSlider from "../../components/home/HeroSlider/HeroSlider";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      await fetch("https://update-blog-api.vercel.app/all-blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
        });
    };
    fetchBlogData();
  }, []);

  return (
    <div>
      {/* <Hero /> */}
      <HeroSlider/>
      <FeaturedBlog />
      <PopularCategory />
      <div className=" lg:flex md:flex  lg:gap-12 md:gap-4 lg:border-[1px] rounded lx:p-16 lg:p-8 md:p-8 p-2">
        <BlogCardList blogs={blogs} />
        <BlogMenu blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
