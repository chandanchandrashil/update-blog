import React from 'react';

const FeaturedBlog = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center sm:my-10 md:my-12 lg:my-16  justify-center py-8">
        {/* Image Part */}
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <img
            src="https://images.pexels.com/photos/24816519/pexels-photo-24816519/free-photo-of-sintra-national-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Blog Post"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Part */}
        <div className="w-full md:w-1/2 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rerum culpa eligendi.
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates iure aliquam ab eum illo, veniam alias ipsa. Velit quam
              reiciendis ex ratione nesciunt nobis placeat. Nam quod odio
              quibusdam saepe. Libero ipsam amet explicabo ab ad et harum
              provident, earum quo possimus deleniti quos iure id quaerat iusto
              fugiat reprehenderit.
            </p>
            <button className="btn border bg-blue-400 font-semibold py-4 rounded px-6">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;