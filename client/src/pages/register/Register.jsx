import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { ImSpinner } from "react-icons/im";
import { saveUserInfo } from "../../api/auth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    createUser,
    loading,
    
    setLoading,
    logInWithGoogle,
    updateUserProfile,
  } = useContext(AuthContext);
  /* const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm(); */

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // image upload
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGEBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        // create new user
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(name, imageUrl)
              .then((result) => {
                toast.success("Register Successful!");
                // save userInfo mongodb
                saveUserInfo(result.user);
                navigate(from, { replace: true });
                form.reset();
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });

    console.log(url);
  };

  const handleGoogleRegister = () => {
    logInWithGoogle()
      .then((result) => {
        console.log("from register page : 87",result.user);
        toast.success("Register successful!");
        saveUserInfo(result.user)
        // save user info mongodb
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleFacebookRegister = () => {
    toast.success("This Featured Coming  Soon! Please Register with Google !");
    /* logInWithFacebook()
      .then((result) => {
        console.log(result.user);
        toast.success("Register successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      }); */
  };

  return (
    <div className="bg-gray-100 min-h-[83vh] flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="lg:text-4xl  md:text-2xl text-2xl text-center font-semibold mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              /*  {...register("name", { required: true })} */
              className="w-full border-gray-300  border rounded-md mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Write your username"
            />
            {/* {errors.name && (
              <span className="text-red-600">Name field is required</span>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block font-semibold text-gray-700"
            >
              Image upload
            </label>
            <input
              className="w-full border-gray-300  border rounded-md mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
              /*  {...register(`image${data.image}`)} */
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              /*  {...register("email", { required: true })} */
              className="w-full border-gray-300  border rounded-md mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Write your username"
            />
            {/* {errors.email && (
              <span className="text-red-600">Email field is required</span>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              /*   {...register("password", { required: true })} */
              className="w-full border border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
            {/* {errors.password && (
              <span className="text-red-600">Password field is required</span>
            )} */}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {loading ? (
              <ImSpinner
                className="m-auto animate-spin text-white-500"
                w={24}
              />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleRegister}
            type="submit"
            className="w-full  mt-6 border rounded-md py-2 px-4 hover:bg-blue-100 focus:outline-none focus:bg-blue-200"
          >
            Register with Google
          </button>
          <button
            onClick={handleFacebookRegister}
            type="submit"
            className="w-full  my-6 border rounded-md py-2 px-4 hover:bg-blue-100 focus:outline-none focus:bg-blue-200"
          >
            Register with Facebook
          </button>
        </div>
        <p>
          Already have an account yet?{" "}
          <Link className="text-semibold text-blue-400 text-lg" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
