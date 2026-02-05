import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog How to start a blog",
      description: "Brief description of Blog 1. This is a placeholder text.",
      imageUrl:
        "https://picsum.photos/200/300?grayscale",
    },
  ];

  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="relative w-full pt-30 mx-auto bg-gray-200 py-16 px-4 ">
        {/* #hero section */}


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

        {/* #blogs Card section */}

        {blogs.map((blog) => (
          <div key={blog.id} className="max-w-[1240px] mx-auto py-16">
            <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden drop-shadow-2xl">
                <img
                  className="h-56 w-full object-cover"
                  src={blog.imageUrl}
                  alt="{blog.title}"
                />
                <div>
                  <h3 className="text-2xl font-bold p-4">{blog.title}</h3>
                  <p className="p-4">{blog.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Blogs;
