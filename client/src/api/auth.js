export const saveUserInfo = (user) => {
  console.log(" from auth.js", user);
  const currentUserInfo = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };

  try {
    fetch(
      `https://update-blog-ek8pfkh9r-chandanchandrashils-projects.vercel.app/users/${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUserInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err.message);
  }
};
