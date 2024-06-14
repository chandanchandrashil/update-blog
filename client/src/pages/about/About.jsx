import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our blog! We're passionate about sharing valuable knowledge
          and insights on various topics, ranging from technology and science to
          lifestyle and culture.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to provide informative and engaging content that
          inspires and educates our readers. Whether you're looking for
          practical tips, in-depth analysis, or simply some entertainment, we
          have something for everyone.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Our Team</h3>
        <ul className="list-disc pl-6">
          <li className="mb-2">John Doe - Editor-in-Chief</li>
          <li className="mb-2">Jane Smith - Senior Writer</li>
          <li className="mb-2">Alex Johnson - Contributing Author</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
