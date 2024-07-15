
import SingleBlogMenu from './SingleBlogMenu';
import BlogMenuPost from './BlogMenuPost';
import CategoryListLinks from './CategoryListLinks';
const BlogMenu = ({ blogs }) => {
  
  const categories = [
    { id: 1, title: "Health" },
    { id: 2, title: "Fashion" },
    { id: 3, title: "Sport" },
    { id: 4, title: "Life-style" },
    { id: 5, title: "Travel" },
    { id: 6, title: "Education" },
    { id: 7, title: "Technology" },
    { id: 8, title: "Food & Drink" },
    { id: 9, title: "Business" },
    { id: 10, title: "Entertainment" },
  ];
  return (
    <>
      <div className=" lg:w-1/3 w-full">
        <div className="my-12 mr-auto ml-auto">
          <h1 className="  text-4xl sm:font-bold font-bold">Most Popular</h1>
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit.</h2>
        </div>
        <div className="border-b-[1px]">
          {blogs?.slice(0, 6).map((blog) => (
            <SingleBlogMenu key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="my-12  ">
          <h1 className="  text-4xl sm:font-bold font-bold">Category Links</h1>
        </div>
        <div className=" grid grid-rows-3 grid-flow-col gap-2">
          {categories?.map((item) => (
            <CategoryListLinks key={item.id} item={item} />
          ))}
        </div>

        <div className="my-12  ">
          <h1 className="  text-4xl sm:font-bold font-bold">Editors Picks</h1>
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit.</h2>
        </div>
        <div>
          {blogs?.slice(0, 6).map((blog) => (
            <BlogMenuPost key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogMenu;