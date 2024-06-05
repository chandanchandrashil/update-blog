// add blog
export const addNewBlog = (formData) => {
  console.log(" from blogs.js", formData);

  try {
    fetch(
      "https://update-blog-ek8pfkh9r-chandanchandrashils-projects.vercel.app/all-blogs",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err.message);
  }
};

// edit blog
export const editBlogPost = (formData) => {
  console.log(" from blogs.js", formData);

  try {
    fetch(
      "https://update-blog-ek8pfkh9r-chandanchandrashils-projects.vercel.app/all-blogs",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err.message);
  }
};
