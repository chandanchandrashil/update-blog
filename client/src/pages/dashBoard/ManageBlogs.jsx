
import { useLoaderData } from "react-router-dom";
import ManageBlogCard from "../../components/dashboard/ManageBlogCard";

const ManageBlogs = () => {
  const blogs = useLoaderData();
  console.log(blogs)
  
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">welcome manage product page</h1>
      <div className="grid gap-4 m-12 ms:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {blogs?.map((blog) => (
          <ManageBlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default ManageBlogs;
