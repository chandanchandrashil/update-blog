import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className=" flex flex-col justify-center items-center h-screen text-center py-32">
      <h className="text-6xl font-extrabold mb-8">Error {status || 404}</h>
      <p className="lg:text-3xl text-red-600 mb-8">{error?.message}</p>
      <button className="btn btn-link">
        <Link className="text-lg" to="/">
          Back Home
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
