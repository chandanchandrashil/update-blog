import { useContext, useRef,  } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { ImSpinner } from "react-icons/im";

const Login = () => {
  const emailRef = useRef()
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
  const { loginUser, logInWithGoogle, loading, setLoading,  logInWithFacebook, resetPassword } =
    useContext(AuthContext);
  

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const handleFacebookLogin = () => {
    logInWithFacebook()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success(
          "Please check your email and see you reset password link"
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="bg-gray-100 min-h-[83vh] flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="lg:text-4xl md:text-2xl text-center font-semibold mb-4">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="w-full border-gray-300  border rounded-md mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Write your username"
            />
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
              className="w-full border border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
            <label className="label">
              <button
                onClick={handleResetPassword}
                className="label-text-alt pt-2 hover:text-red-400 underline link link-hover"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {loading ? (
              <ImSpinner
                className="m-auto animate-spin text-white-500"
                w={24}
              />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="mt-6">
          <button
            type="submit"
            onClick={handleGoogleLogin}
            className="w-full  mt-6 border rounded-md py-2 px-4 hover:bg-blue-100 focus:outline-none focus:bg-blue-200"
          >
            Login with Google
          </button>
          <button
            onClick={handleFacebookLogin}
            type="submit"
            className="w-full  my-6 border rounded-md py-2 px-4 hover:bg-blue-100 focus:outline-none focus:bg-blue-200"
          >
            Login with Facebook
          </button>
        </div>
        <p>
          Don't have an account yet?{" "}
          <Link className="text-semibold text-blue-400 text-lg" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
