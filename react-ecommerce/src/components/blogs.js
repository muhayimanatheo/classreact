import { useState } from "react";
import React from "react";
//import { Link } from "react-router-dom";
// import { useState } from "react";
function BlogFunc() {
  const blogPosts = [
    {
      photo: require("../images/customer.jpeg"),
      title: "Title of Blog Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis,",
    },
    {
      photo: require("../images/customer.jpeg"),
      title: "Title of Blog Post 2",
      content:
        "Duis tempus dignissim nunc, eget malesuada lorem sodales non. Proin in arcu efficitur",
    },
    {
      photo: require("../images/customer.jpeg"),
      title: "Title of Blog Post 3",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae,",
    },
  ];
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can handle the submission, like sending the data to a server
      console.log("Name: " + name);
      console.log("Comment: " + comment);
  };

  return (
    <div className="BlogFunc">
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">My Blog</h1>
          </div>
        </header>

        <main className="w-full flex-grow py-8 flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-1/2 h-40">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img src={post.photo} alt="" className="w-full p-1"></img>
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                <p>{post.content}</p>
              </div>
            ))}
          </div>

          <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <label className="block mb-2">
                Name:
              </label>
              <input type="text"name="name"value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 mb-4 border rounded-md"/>
              <label  className="block mb-2">
                Comment:
              </label>
              <textarea name="comment" rows="4"value={comment} onChange={(e) => setComment(e.target.value)} required className="w-full px-4 py-2 mb-4 border rounded-md resize-none" ></textarea>
              <button type="submit" className="bg-[#EAB308] text-white px-4 py-2 rounded-md hover:bg-[#CA8A04] cursor-pointer"> Submit</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BlogFunc;
