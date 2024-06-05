import { useState } from "react";
// import { addNewBlog } from "../../api/blogs";
// import toast from "react-hot-toast";

const EditBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    author_name: "",
    author_image: "",
    published_date: "",
    reading_time: "",
    content: "",
    tags: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /* addNewBlog(formData);
    toast.success("Blog post add successfully!"); */

    console.log("Form submitted:", formData);
    setFormData({
      title: "",
      image: "",
      category: "",
      author_name: "",
      author_image: "",
      published_date: "",
      reading_time: "",
      content: "",
      tags: "",
    });
  };

  return (
    <div className="flex flex-col max-h-screen justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg   rounded-md shadow-md p-4"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add Blog Post
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="coding">Coding</option>
            <option value="programming">Programming</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            {/* Add more category options as needed */}
          </select>
        </div>

        {/* Author Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label
              htmlFor="author_name"
              className="block text-sm font-medium mb-1"
            >
              Author Name
            </label>
            <input
              type="text"
              name="author_name"
              id="author_name"
              value={formData.author_name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="author_image"
              className="block text-sm font-medium mb-1"
            >
              Author Image URL
            </label>
            <input
              type="url"
              name="author_image"
              id="author_image"
              value={formData.author_image}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Tags */}
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium mb-1">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          {/* Reading Time */}
          <div className="mb-4">
            <label
              htmlFor="reading_time"
              className="block text-sm font-medium mb-1"
            >
              Reading Time (minutes)
            </label>
            <input
              type="number"
              name="reading_time"
              id="reading_time"
              value={formData.reading_time}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Published Date */}
        <div className="mb-4">
          <label
            htmlFor="published_date"
            className="block text-sm font-medium mb-1"
          >
            Published Date
          </label>
          <input
            type="date"
            name="published_date"
            id="published_date"
            value={formData.published_date}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
