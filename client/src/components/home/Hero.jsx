import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-[80vh] text-white flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/24816519/pexels-photo-24816519/free-photo-of-sintra-national-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Overlay */}
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Featured Blog Post</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn border bg-blue-400 font-semibold py-4 rounded px-6">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
