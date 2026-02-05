import React from "react";

const Blogs = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="relative w-full pt-30 mx-auto bg-amber-100 py-16 px-4 ">
        {/* #blogs Title section */}
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 text-balance dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Shaping a world with re-imagination.
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg md:text-xl">
            Dive into our blog for the latest insights, trends, and stories in
            technology, innovation, and beyond. Stay informed and inspired with
            expert perspectives and in-depth analyses.
          </p>
        </div>

        {/* #blogs section */}
        <div className="grid lg:grid-cols-3 gap-8 px-4 text-black mt-12 lg:w-2/3 mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="" alt="" />
            blog1
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="" alt="" />
            blog2
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="" alt="" />
            blog3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
