import React from "react";

const BlogContent = () => {
  const Blog = {
    id: 1,
    title: "10 Days Blog How to start a blog",
    description: "Brief description of Blog 1. This is a placeholder text.",
    coverImg: "https://picsum.photos/200/300?grayscale&blur=2",
    content:
      " This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text.1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    author: "David Gaughran",
    authorImg: "https://picsum.photos/200/300?grayscale",
    authorDesc: "This is a placeholder text.",
  };

  return (
    <div className="w-full pb-10  bg-gray-300">
      <div className="max-w-310 mx-auto">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-x-8 md:gap-x-4 sm:gap-x-0 gap-x-0 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          {/* #Blog content */}
          <div className="col-span-2 gap-x-8 gap-y-8  ">
            <img
              className="h-56 w-full object-cover"
              src={Blog.coverImg}
              alt={Blog.title}
            />
            <h1 className="text-3xl font-bold pt-8 my-1"> {Blog.title} </h1>
            <h3 className="pt-5 text-2xl">{Blog.description}</h3>
            <p className="pt-1 font-bold">{Blog.author}</p>
            <div className="pt-5">
              <p>{Blog.content}</p>
            </div>
          </div>
          <div className="w-full mx-auto bg-white rounded-xl drop-shadow-md py-5 max-h-62.5  p-4">
              <img
                src={Blog.authorImg}
                alt=""
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h4 className="pt-2 font-bold text-center ">{Blog.author}</h4>
              <p className="text-center font-medium">{Blog.authorDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
